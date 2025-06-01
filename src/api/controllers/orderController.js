// orderController.js
const pool = require("../utils/db");
const { sendOrderConfirmationEmail } = require("../utils/email");

// Thanh toán
const checkout = async (req, res) => {
  const { user_id, recipient_name, recipient_phone, recipient_address } =
    req.body;

  console.log("Received request:", {
    user_id,
    recipient_name,
    recipient_phone,
    recipient_address,
  });

  if (!user_id || !recipient_name || !recipient_phone || !recipient_address) {
    console.log("Missing required fields");
    return res.status(400).json({ message: "Missing required fields" });
  }

  let connection;
  try {
    console.log("Attempting to get database connection...");
    connection = await pool.getConnection();
    console.log("Database connection successful");

    await connection.beginTransaction();
    console.log("Transaction started");

    console.log("Fetching cart for user_id:", user_id);
    const [items] = await connection.query(
      "SELECT c.id as cart_id, ci.product_id, ci.quantity, p.price, p.name FROM carts c JOIN cart_items ci ON c.id = ci.cart_id JOIN products p ON ci.product_id = p.id WHERE c.user_id = ?",
      [user_id]
    );
    console.log("Cart items fetched:", items);

    if (items.length === 0) {
      console.log("Cart is empty");
      throw new Error("Giỏ hàng trống");
    }

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    console.log("Total calculated:", total);

    const [orderResult] = await connection.query(
      "INSERT INTO orders (user_id, total, recipient_name, recipient_phone, recipient_address) VALUES (?, ?, ?, ?, ?)",
      [user_id, total, recipient_name, recipient_phone, recipient_address]
    );
    const order_id = orderResult.insertId;
    console.log("Order created with ID:", order_id);

    const orderItems = items.map((item) => [
      order_id,
      item.product_id,
      item.quantity,
      item.price,
    ]);
    await connection.query(
      "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?",
      [orderItems]
    );
    console.log("Order items added");

    await connection.query("DELETE FROM cart_items WHERE cart_id = ?", [
      items[0].cart_id,
    ]);
    console.log("Cart cleared");

    // Lấy email người dùng từ bảng users
    const [user] = await connection.query(
      "SELECT email FROM users WHERE id = ?",
      [user_id]
    );
    if (!user || user.length === 0 || !user[0].email) {
      throw new Error("User email not found");
    }
    const userEmail = user[0].email;

    // Gửi email trực tiếp
    const orderDetails = {
      order_id,
      total,
      recipient_name,
      recipient_phone,
      recipient_address,
      items: items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };
    await sendOrderConfirmationEmail(userEmail, orderDetails);
    console.log(`Email sent for order #${order_id}`);

    await connection.commit();
    console.log("Transaction committed");

    res.status(200).json({ success: true, order_id });
  } catch (err) {
    console.error("Error:", err.message);
    if (connection) {
      await connection.rollback();
      connection.release();
    }
    if (
      err.message === "Giỏ hàng trống" ||
      err.message === "User email not found"
    ) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Checkout failed", error: err.message });
    }
  } finally {
    if (connection) connection.release();
  }
};

// Lấy danh sách đơn hàng (cho restaurantManager)
const getOrders = async (req, res) => {
  try {
    // Lấy user_id từ token
    const userId = req.user.id;
    const [orders] = await pool.query(
      "SELECT o.id, o.total, o.created_at, o.recipient_name FROM orders o WHERE o.user_id = ?",
      [userId]
    );
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lấy số liệu thống kê đơn hàng (cho restaurantManager)
const getOrderStats = async (req, res) => {
  try {
    const userId = req.user.id;
    const [stats] = await pool.query(
      "SELECT DATE(o.created_at) as date, COUNT(o.id) as order_count, SUM(o.total) as total_amount FROM orders o WHERE o.user_id = ? GROUP BY DATE(o.created_at)",
      [userId]
    );
    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  checkout,
  getOrders,
  getOrderStats,
};

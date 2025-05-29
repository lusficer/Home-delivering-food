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
    return res.status(400).send({ message: "Missing required fields" });
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

    res.send({ success: true });
  } catch (err) {
    console.error("Error:", err.message);
    if (connection) {
      await connection.rollback();
      connection.release();
    }
    if (err.message === "Giỏ hàng trống") {
      res.status(400).send({ message: err.message });
    } else if (err.message === "User email not found") {
      res.status(400).send({ message: err.message });
    } else {
      res.status(500).send({ message: "Checkout failed", error: err.message });
    }
  }
};

module.exports = {
  checkout,
};

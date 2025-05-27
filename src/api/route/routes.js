const express = require("express");
const pool = require("../db"); // kết nối MySQL
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthentication,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// 🔐 Đăng ký
router.post("/user/create", async (req, res) => {
  const { name, password, email, phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const [result] = await pool.query(
      "INSERT INTO users (name, password, email, phone) VALUES (?, ?, ?, ?)",
      [name, hashedPassword, email, phone]
    );
    res.status(201).json({ message: "User created", userId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔐 Đăng nhập
router.post("/user/login", async (req, res) => {
  const { name, password } = req.body;
  console.log("Đã nhận request login:", req.body);
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE name = ?", [
      name,
    ]);
    const user = rows[0];
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📄 Lấy thông tin người dùng hiện tại
router.get("/user/info", verifyToken, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, phone, role FROM users WHERE id = ?",
      [req.user.id]
    );
    const user = rows[0];
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏️ Cập nhật thông tin user
router.put("/user/:id", verifyTokenAndAuthentication, async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
    await pool.query(
      "UPDATE users SET name = ?, email = ?, phone = ?, password = COALESCE(?, password) WHERE id = ?",
      [name, email, phone, hashedPassword, req.params.id]
    );
    res.status(200).json({ message: "User updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Xoá user (admin hoặc chính user đó)
router.delete("/user/:id", verifyTokenAndAuthentication, async (req, res) => {
  try {
    await pool.query("DELETE FROM users WHERE id = ?", [req.params.id]);
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👑 Lấy tất cả user (chỉ admin)
router.get("/user", verifyTokenAndAdmin, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, phone, role FROM users"
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/cart", verifyToken, async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT ci.product_id, ci.quantity, p.name, p.price, p.image, p.desciption, p.type
       FROM carts c
       JOIN cart_items ci ON c.id = ci.cart_id
       JOIN products p ON ci.product_id = p.id
       WHERE c.user_id = ?`,
      [req.user.id]
    );
    res.status(200).json({ items: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/products", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/cart", verifyToken, async (req, res) => {
  console.log("Received /cart POST request:", req.body);
  const { user_id, product_id, quantity } = req.body;
  try {
    console.log("User from token:", req.user);
    if (user_id !== req.user.id) {
      console.log("Unauthorized: user_id does not match token");
      return res.status(403).json({ error: "Unauthorized" });
    }

    console.log("Checking for existing cart...");
    const [cartResults] = await pool.query(
      "SELECT id FROM carts WHERE user_id = ?",
      [user_id]
    );
    console.log("Cart results:", cartResults);

    let cart_id;
    if (cartResults.length > 0) {
      cart_id = cartResults[0].id;
    } else {
      console.log("Creating new cart for user:", user_id);
      const [result] = await pool.query(
        "INSERT INTO carts (user_id) VALUES (?)",
        [user_id]
      );
      cart_id = result.insertId;
    }

    console.log("Checking for existing cart item...");
    const [existingItem] = await pool.query(
      "SELECT id, quantity FROM cart_items WHERE cart_id = ? AND product_id = ?",
      [cart_id, product_id]
    );
    console.log("Existing item:", existingItem);

    if (existingItem.length > 0) {
      const newQuantity = existingItem[0].quantity + quantity;
      if (newQuantity <= 0) {
        console.log(
          "Removing item as quantity would be 0 or less:",
          existingItem[0].id
        );
        await pool.query("DELETE FROM cart_items WHERE id = ?", [
          existingItem[0].id,
        ]);
      } else {
        console.log("Updating quantity for existing item:", existingItem[0].id);
        await pool.query("UPDATE cart_items SET quantity = ? WHERE id = ?", [
          newQuantity,
          existingItem[0].id,
        ]);
      }
    } else if (quantity > 0) {
      console.log("Inserting new cart item...");
      await pool.query(
        "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)",
        [cart_id, product_id, quantity]
      );
    }

    console.log("Cart item updated successfully");
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error in /cart POST:", err);
    res.status(500).json({ error: err.message });
  }
});

// Xóa sản phẩm khỏi giỏ hàng
router.delete("/cart/:product_id", verifyToken, async (req, res) => {
  const { user_id } = req.body;
  const { product_id } = req.params;
  try {
    console.log("Received /cart DELETE request:", { user_id, product_id });
    if (user_id !== req.user.id) {
      console.log("Unauthorized: user_id does not match token");
      return res.status(403).json({ error: "Unauthorized" });
    }

    const [cartResults] = await pool.query(
      "SELECT id FROM carts WHERE user_id = ?",
      [user_id]
    );
    if (cartResults.length === 0) {
      console.log("Cart not found for user:", user_id);
      return res.status(404).json({ error: "Cart not found" });
    }

    const cart_id = cartResults[0].id;
    await pool.query(
      "DELETE FROM cart_items WHERE cart_id = ? AND product_id = ?",
      [cart_id, product_id]
    );
    console.log("Cart item removed successfully");
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error in /cart DELETE:", err);
    res.status(500).json({ error: err.message });
  }
});

// Thanh toán
router.post("/checkout", async (req, res) => {
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
      "SELECT c.id as cart_id, ci.product_id, ci.quantity, p.price FROM carts c JOIN cart_items ci ON c.id = ci.cart_id JOIN products p ON ci.product_id = p.id WHERE c.user_id = ?",
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
    } else {
      res.status(500).send({ message: "Checkout failed", error: err.message });
    }
  }
});
module.exports = router;

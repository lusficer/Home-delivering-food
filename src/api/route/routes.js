// 📂 routes.js (đã sửa để dùng MySQL và tương thích quyền admin/user)

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

module.exports = router;

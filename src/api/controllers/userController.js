const pool = require("../utils/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// 🔐 Đăng ký
const registerUser = async (req, res) => {
  const { name, password, email, phone } = req.body;

  // Kiểm tra các trường bắt buộc
  if (!name || !password || !email || !phone) {
    return res.status(400).json({
      error: "All fields (name, password, email, phone) are required",
    });
  }

  try {
    // Kiểm tra trùng lặp email
    const [existingEmail] = await pool.query(
      "SELECT email FROM users WHERE email = ?",
      [email]
    );
    if (existingEmail.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Kiểm tra trùng lặp username (name)
    const [existingName] = await pool.query(
      "SELECT name FROM users WHERE name = ?",
      [name]
    );
    if (existingName.length > 0) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const [existingManagers] = await pool.query(
      "SELECT id, name, email FROM users WHERE role = 'restaurantManager'"
    );

    if (role === "restaurantManager" && existingManagers.length > 0) {
      return res.status(400).json({
        error:
          "Only one restaurant manager is allowed. Current restaurant manager: " +
          existingManagers[0].name +
          " (" +
          existingManagers[0].email +
          ")",
      });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo người dùng mới
    const [result] = await pool.query(
      "INSERT INTO users (name, password, email, phone) VALUES (?, ?, ?, ?)",
      [name, hashedPassword, email, phone]
    );
    res.status(201).json({ message: "User created", userId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔐 Đăng nhập
const loginUser = async (req, res) => {
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
};

// 📄 Lấy thông tin người dùng hiện tại
const getUserInfo = async (req, res) => {
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
};

// ✏️ Cập nhật thông tin user
const updateUser = async (req, res) => {
  const { email, phone, password, role } = req.body;
  const userId = req.params.id;
  try {
    if (role === "restaurantManager") {
      const [existingManagers] = await pool.query(
        "SELECT id, name, email FROM users WHERE role = 'restaurantManager' AND id != ?",
        [userId]
      );

      if (existingManagers.length > 0) {
        return res.status(400).json({
          error:
            "Only one restaurant manager is allowed. Current restaurant manager: " +
            existingManagers[0].name +
            " (" +
            existingManagers[0].email +
            ")",
        });
      }
    }

    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
    await pool.query(
      "UPDATE users SET email = ?, phone = ?, role = ?, password = COALESCE(?, password) WHERE id = ?",
      [email, phone, role, hashedPassword, req.params.id]
    );
    res.status(200).json({ message: "User updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Xoá user (admin hoặc chính user đó)
const deleteUser = async (req, res) => {
  try {
    await pool.query("DELETE FROM users WHERE id = ?", [req.params.id]);
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👑 Lấy tất cả user (chỉ admin)
const getAllUsers = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, phone, role FROM users"
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
  updateUser,
  deleteUser,
  getAllUsers,
};

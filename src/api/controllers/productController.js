// productController.js
const pool = require("../utils/db");

// Lấy danh sách sản phẩm
const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm sản phẩm (cho restaurantManager)
const createProduct = async (req, res) => {
  const { name, type, desciption, price, image, link } = req.body;
  try {
    if (!name || !type || !price) {
      return res
        .status(400)
        .json({ error: "Name, type, and price are required" });
    }
    const [result] = await pool.query(
      "INSERT INTO products (name, type, desciption, price, image, link) VALUES (?, ?, ?, ?, ?, ?)",
      [name, type, desciption || null, price, image || null, link || null]
    );
    res.status(201).json({ message: "Product created", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Sửa sản phẩm (cho restaurantManager)
const updateProduct = async (req, res) => {
  const { name, type, desciption, price, image, link } = req.body;
  const productId = req.params.id;
  try {
    if (!name || !type || !price) {
      return res
        .status(400)
        .json({ error: "Name, type, and price are required" });
    }
    const [result] = await pool.query(
      "UPDATE products SET name = ?, type = ?, desciption = ?, price = ?, image = ?, link = ? WHERE id = ?",
      [
        name,
        type,
        desciption || null,
        price,
        image || null,
        link || null,
        productId,
      ]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xóa sản phẩm (cho restaurantManager)
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const [result] = await pool.query("DELETE FROM products WHERE id = ?", [
      productId,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

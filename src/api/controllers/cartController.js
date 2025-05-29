const pool = require("../utils/db");

// Lấy giỏ hàng
const getCart = async (req, res) => {
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
};

// Thêm/Sửa giỏ hàng
const addToCart = async (req, res) => {
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
};

// Xóa sản phẩm khỏi giỏ hàng
const removeFromCart = async (req, res) => {
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
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
};

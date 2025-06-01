const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthentication,
  verifyTokenAndAdmin,
  verifyTokenAndRestaurantManager,
} = require("../utils/verifyToken");

// Import các controller
const userController = require("../controllers/userController");
const cartController = require("../controllers/cartController");
const orderController = require("../controllers/orderController");
const productController = require("../controllers/productController");

// User Routes
router.post("/user/create", userController.registerUser);
router.post("/user/login", userController.loginUser);
router.get("/user/info", verifyToken, userController.getUserInfo);
router.put("/user/:id", verifyToken, userController.updateUser);
router.delete(
  "/user/:id",
  verifyTokenAndAuthentication,
  userController.deleteUser
);
router.get("/user", verifyTokenAndAdmin, userController.getAllUsers);

// Cart Routes
router.get("/cart", verifyToken, cartController.getCart);
router.post("/cart", verifyToken, cartController.addToCart);
router.delete("/cart/:product_id", verifyToken, cartController.removeFromCart);

// Order Routes
router.post("/checkout", orderController.checkout);
router.get("/orders", verifyTokenAndRestaurantManager, orderController.getOrders); // Xem danh sách đơn hàng
router.get("/orders/stats", verifyTokenAndRestaurantManager, orderController.getOrderStats); // Xem số liệu đơn mua

// Get all Product
router.get("/products", productController.getProducts);
router.put("/products/:id", verifyTokenAndRestaurantManager, productController.updateProduct); // Sửa sản phẩm
router.delete("/products/:id", verifyTokenAndRestaurantManager, productController.deleteProduct); // Xóa sản phẩm
router.post("/products", verifyTokenAndRestaurantManager, productController.createProduct); // Thêm sản phẩm


module.exports = router;

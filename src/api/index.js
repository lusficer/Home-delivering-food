var http = require("http");
var express = require("express");
var cors = require("cors");
require("dotenv").config();

const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

const routes = require("./route/routes");
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors(corsConfig));

app.use("/api", routes); // <-- Gắn router vào prefix /api

app.get("/", (req, res) => {
  res.send("Hello");
});
// Khởi động server
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

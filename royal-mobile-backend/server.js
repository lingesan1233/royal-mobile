const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const dns = require("node:dns/promises");
dns.setServers(['8.8.8.8'], ['8.8.4.4']);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/sales", require("./routes/salesRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
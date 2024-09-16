const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const prisma = require("./connection");
const userRoutes = require("./routes/userRoute");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

module.exports = app;

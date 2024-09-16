const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/userController");

// Ruta para el registro de usuarios
router.post("/register", registerUser);

module.exports = router;

// userController.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/userModel");

// Registro de usuario
const registerUser = async (req, res) => {
  const { nombre, apellido, edad, mail, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await findUserByEmail(mail);
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const newUser = await createUser({
      nombre,
      apellido,
      edad,
      mail,
      password: hashedPassword, // Guardar la contraseña encriptada
    });

    // Crear el token
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      message: "Usuario registrado exitosamente",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { registerUser };

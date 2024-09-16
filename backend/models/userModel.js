const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Crear un nuevo usuario en la base de datos
const createUser = async (data) => {
  return await prisma.usuario.create({
    data: {
      nombre: data.nombre,
      apellido: data.apellido,
      edad: data.edad,
      mail: data.mail,
      password: data.password, // La contraseña ya debería estar encriptada en el controller
    },
  });
};

// Buscar usuario por correo electrónico
const findUserByEmail = async (mail) => {
  return await prisma.usuario.findUnique({
    where: { mail },
  });
};

module.exports = { createUser, findUserByEmail };

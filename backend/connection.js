const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const conectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("conectado");
  } catch (error) {
    console.error("no conectó", error);
  }
};

conectToDatabase();

module.exports = prisma;

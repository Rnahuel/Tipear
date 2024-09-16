const http = require("http");
const app = require("./index");

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server corriendo en el puerto ${PORT}`);
});

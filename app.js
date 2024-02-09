const express = require("express");
const app = express();

const saludoRouter = require("./routes/saludo");
app.use("/saludo", saludoRouter);

app.listen(3000, () => {
  console.log("La aplicación está escuchando en el puerto 3000.");
});

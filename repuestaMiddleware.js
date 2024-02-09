const express = require("express");
const app = express();

const authenticateMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
};

app.get("/dashboard", authenticateMiddleware, (req, res) => {
  res.send("Bienvenido al dashboard");
});

app.listen(3000, () => {
  console.log("La aplicación está escuchando en el puerto 3000.");
});

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("¡Hola! Este es un saludo de Pedro");
});

module.exports = router;

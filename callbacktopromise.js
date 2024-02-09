// Convierte el siguiente código de callback a una promesa en Node.js.
// fs.readFile("archivo.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
const fs = require("fs");

const readFilePromise = (filePath, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFilePromise("archivo.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    throw err;
  });

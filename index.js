const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend MP wallet funcionando🚀");});

app.listen(PORT, () => {
console.log('servidor escuchando en puerto ${PORT}');
});
  
  

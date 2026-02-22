const express = require("express");
const mercadopago =
  require("mercadopago");

const app = express();
app.use(express.json());

mercadopago.configure({
  access_token:
  process.env.MP_ACCESS_TOKEN
});
app.get("/", (req, res) => {
  res.send("Backend Mercado Pago activo");
});
app.post("/crear-preferencia", async (req, res) => {
  try {
    const peference = {
      items: [
        {
          title: "Recarga kenyi wallet",
          quantity: 1,
          unit_price: 100
        }
        ],
      back_urls: {
        success:
          "htpps://tu-frontend.com/success",
        failure:
          "https://tu-frontend.com/failure",
        pending:
          "https://tu-frontend.com/pending"
      },
      auto_return: "approved"
    };
    const response = await
      mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear preferencia" });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor activo en puerto" + PORT);
});
                      
                       

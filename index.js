const express = require("express");
const mercadopago = require("mercadopago");

const app = express();
app.use(express.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend Mercado Pago Wallet funcionando OK");
});

// Crear pago
app.post("/crear-pago", async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: "Carga de saldo",
          quantity: 1,
          unit_price: 100
        }
      ]
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear pago" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor activo en puerto", PORT);
});
console.log("deploy test");

console.log("deploy test");

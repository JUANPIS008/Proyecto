const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // permite que tu frontend acceda a esta API
app.use(express.json());

let citas = [];

app.post('/api/citas', (req, res) => {
  const cita = req.body;
  citas.push(cita);
  res.status(201).json({ mensaje: "Cita creada", cita });
});

app.get('/api/citas', (req, res) => {
  res.json(citas);
});

app.listen(3000, () => console.log('API escuchando en http://localhost:3000'));
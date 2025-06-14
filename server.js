const express = require('express');
const { suma } = require('./calculator');
const app = express();
app.use(express.json());

app.post('/suma', (req, res) => {
    const { a, b } = req.body;
    const resultado = suma(a, b);
    res.json({ resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
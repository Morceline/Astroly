const express = require('express');
const path = require('path');
const app = express();

// Configura o Express de forma simples e direta para servir a pasta public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Astroly rodando na porta 3000');
});

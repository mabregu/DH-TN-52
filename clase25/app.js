// Definir express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mainRoutes = require('./routes/mainRoutes');

// Aca van las rutas
app.use(mainRoutes);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
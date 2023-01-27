// Definir express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Aca van las rutas
app.use(mainRoutes);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
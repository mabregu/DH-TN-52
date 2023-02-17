const express = require('express');
const app = express();
const path = require('path');

const session = require('express-session');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productsRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Middlewares
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    // cookie: { maxAge: 60000 } // 60 segundos
}))

app.use(methodOverride('_method'))

app.use(mainRoutes);
app.use('/products', productRoutes);
// app.use((req, res) => {
//     res.status(404).render('404', {
//         title: '404'
//     });
// })

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
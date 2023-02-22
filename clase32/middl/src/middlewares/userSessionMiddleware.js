const userSessionMiddleware = (req, res, next) => {
    if (req.cookies && req.cookies.userLogged) {
        // Si el usuario quiso ser recordado lo recordamos
        res.locals.userLogged = req.cookies.userLogged;
    }
    
    if (req.session && req.session.userLogged) {
        // Si el usuario esta logueado guardamos la data
        res.locals.userLogged = req.session.userLogged;
    }
    
    next();
}

module.exports = userSessionMiddleware;
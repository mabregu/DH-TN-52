const guestMiddleware = (req, res, next) => {
    if (!req.session.userLogged && !req.cookies.userLogged) {
        return res.redirect('/login');
    }
    
    next();
}

module.exports = guestMiddleware;
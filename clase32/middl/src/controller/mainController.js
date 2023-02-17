const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, '../data/users.json');
const mainController = {
    home: (req, res) => {
        res.render('index', {
            title: 'Home'
        });
    },
    login: (req, res) => {
        res.render('auth/login', {
            title: 'Login'
        });
    },
    processLogin: (req, res) => {
        let users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
        let user = users.find(user => user.email == req.body.email);
        
        if (user) {
            req.session.userLogged = user;
            
            res.redirect('/profile');
        }
    },
    profile: (req, res) => {
        res.render('user/profile', {
            title: 'Profile',
            user: req.session.userLogged
        });
    },
};

module.exports = mainController;
const mainController = {
    home: function (req, res) {
        res.send("Hola express desde el controlador!");
    }
}

module.exports = mainController;
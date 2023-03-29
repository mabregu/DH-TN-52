const ProductModel = require('../../database/models').Product;

const productsAPIController = {
    list: async (req, res) => {
        try {
            const products = await ProductModel.findAll({
                attributes: ['id', 'name', 'description', 'price'],
                include: [
                    'category',
                    {
                        association: 'images',
                        attributes: ['id', 'name'],
                        through: {
                            attributes:[]
                        }
                    }
                ]
            });
            
            res.json({
                success: true,
                data: products
            })
        } catch (error) {
            res.json({
                success: false,
                data: error
            })
        }
    },
    create: async (req, res) => {
        try {
            let images = [];
            if (req.files) {
                images = req.files.map(image => {
                    return {
                        name: image.filename,
                        path: '/img/' + image.filename
                    }
                })
            }

            req.body.images = images;
            
            let product = ProductModel.create(req.body, {
                include: ['images']
            });
            
            res.json({
                success: true,
                message: "Creamos un producto!",
                data: product
            })
        } catch (error) {
            res.json({
                success: false,
                message: error
            })
        }
    }
}

module.exports = productsAPIController;
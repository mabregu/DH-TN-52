const ProductModel = require('../../database/models').Product;

const productsAPIController = {
    list: async (req, res) => {
        try {
            const products = await ProductModel.findAll({
                attributes: ['id', 'name', 'description', 'price'],
                include: ['category', 'images']
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
    }
}

module.exports = productsAPIController;
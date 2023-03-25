module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255)
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        category_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tablename: 'products'
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
        Product.belongsToMany(models.Image, {
            as: 'images',
            foreignKey: 'product_id',
            otherKey: 'image_id',
            through: 'product_images',
            timestamps: false
        });
    }

    return Product;
};
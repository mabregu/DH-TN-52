module.exports = (sequelize, dataTypes) => {
    let alias = 'product_images';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        image_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tablename: 'product_images'
    }
    const product_images = sequelize.define(alias, cols, config); 

    product_images.associate = function (models) {
        product_images.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
        product_images.belongsTo(models.Image, {
            as: 'image',
            foreignKey: 'image_id'
        });
    }

    return product_images;
};
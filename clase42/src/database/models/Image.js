module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';
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
        path: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        timestamps: false,
        tablename: 'images'
    }
    const Image = sequelize.define(alias, cols, config); 

    Image.associate = function (models) {
        Image.belongsToMany(models.Product, {
            as: 'products',
            foreignKey: 'image_id',
            otherKey: 'product_id',
            through: 'product_image',
            timestamps: false
        });
    }

    return Image;
};
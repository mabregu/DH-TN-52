module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [2, 100],
                    msg: "no acepta lo contrario"
                }
            }
        },
        description: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        timestamps: false,
        tablename: 'categories'
    }
    const Category = sequelize.define(alias, cols, config); 

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        })
    }

    return Category;
};
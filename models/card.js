module.exports = (sequelize, DataTypes) => {

    const Card = sequelize.define('card', {
        number: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Card.associate = (models) => {
        Card.belongsTo(models['customer'],{
            foreignKey: 'cust_id',
        });
    };

    return Card;
};
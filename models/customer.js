module.exports = (sequelize, DataTypes) => {

    const Customer = sequelize.define('customer', {
        n_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Customer.associate = (models) => {
        Customer.hasMany(models['account'],{
            foreignKey: 'cust_id',
            as: 'account'
        });
    };

    Customer.associate = (models) => {
        Customer.hasOne(models['card'],{
            foreignKey: 'cust_id',
            as: 'card'
        });
    };

    return Customer;
};
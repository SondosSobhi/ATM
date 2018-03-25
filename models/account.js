module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Account.associate = (models) => {
        console.log(models)
        Account.belongsTo(models['customer'], {
            foreignKey: 'cust_id',
        });
    };

    return Account;
};
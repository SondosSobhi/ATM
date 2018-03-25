module.exports = {

    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('accounts', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            value: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
            cust_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'customers',
                    key: 'id',
                    as: 'customer',
                },
            },
        }),

    down: (queryInterface) => queryInterface.dropTable('accounts'),

};
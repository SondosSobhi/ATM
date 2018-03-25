module.exports = {

    up:(queryInterface, Sequelize) =>
        queryInterface.createTable('cards', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            number: {
                type: Sequelize.STRING,
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

    down: (queryInterface) => queryInterface.dropTable('cards'),
};
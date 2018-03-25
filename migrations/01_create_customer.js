module.exports = {

    up:(queryInterface, Sequelize) =>
        queryInterface.createTable('customers', {
            id: {
                type: Sequelize.INTEGER,
                allowNull:false,
                primaryKey: true,
                autoIncrement: true,

            },
            n_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        }),

    down: (queryInterface) => queryInterface.dropTable('customers'),
};
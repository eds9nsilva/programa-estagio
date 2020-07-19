'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('parada_linha', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      linha_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'linhas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      parada_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'paradas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('parada_linha');
  }
};

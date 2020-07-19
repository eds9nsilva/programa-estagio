'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posicaoveiculos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      latitude:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      longitude:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      veiculo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'veiculos', key: 'id'},
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
    await queryInterface.dropTable('posicaoveiculos');
  }
};

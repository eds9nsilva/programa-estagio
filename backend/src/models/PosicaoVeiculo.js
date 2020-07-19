const {Model, DataTypes} = require('sequelize');

class Posicao_Veiculo extends Model{
    static init(sequelize){
        super.init({
            latitude: DataTypes.DOUBLE,
            longitude: DataTypes.DOUBLE
        }, {
            sequelize,
            tableName: 'posicaoveiculos',
        })
    }

    
    static associate(models){
        this.hasMany(models.Veiculo, { foreignKey: 'id', as: 'veiculo' });    
    }
}


module.exports = Posicao_Veiculo;
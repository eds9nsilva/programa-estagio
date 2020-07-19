const {Model, DataTypes} = require('sequelize');

class Veiculo extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            modelo: DataTypes.STRING
        }, {
            sequelize
        })
    }

    
    static associate(models){
        this.hasMany(models.Posicao_Veiculo, { foreignKey: 'veiculo_id', as: 'veiculo' });    
        this.hasMany(models.Linha, { foreignKey: 'id', as: 'linha' });    
    }
}


module.exports = Veiculo;
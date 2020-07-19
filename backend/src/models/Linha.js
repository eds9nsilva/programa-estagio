const {Model, DataTypes} = require('sequelize');

class Linha extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    
    static associate(models){
        this.hasMany(models.Veiculo, { foreignKey: 'linha_id', as: 'veiculo' });    
        this.belongsToMany(models.Parada, {foreignKey: 'linha_id',through: 'parada_linha', as: 'paradas'})        
    }
}


module.exports = Linha;
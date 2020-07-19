const {Model, DataTypes} = require('sequelize');

class Parada extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            latitude: DataTypes.DOUBLE,
            longitude: DataTypes.DOUBLE
        }, {
            sequelize
        })
    }

    
    static associate(models){
        this.belongsToMany(models.Linha, {foreignKey: 'parada_id', through: 'parada_linha', as: 'linhas'})        
    }
}

module.exports = Parada;
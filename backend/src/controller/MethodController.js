const Parada = require('../models/Parada');
const Linha = require('../models/Linha');
const Veiculo = require('../models/Veiculo');
const { findAll } = require('../models/Linha');

module.exports = {

    async ParadaLinha(req, res) {
        try {
            const parada_id = req.params.id;

            parada = await Parada.findOne(
                { where: { id: parada_id } }
            )
            if (!parada) {
                return res.status(404).json({ erro: "Parada não encontrada" });
            }
            await Parada.findByPk(parada_id, {
                include: {
                    association: 'linhas',
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            }).then(function (result) {
                return res.status(200).json(result)
            })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    async VeiculoLinha(req, res) {
        try {
            const linha_id = req.params.id;
            await Veiculo.findAll({
                where: {linha_id: linha_id}
            }).then(function(result){
                return res.status(200).json(result);
            })
        } catch (erro) {
            return res.status(400).json({ error: error.message });
        }
    }
}
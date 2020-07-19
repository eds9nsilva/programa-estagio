const Veiculo = require('../models/Veiculo');
const PosicaoVeiculo = require('../models/PosicaoVeiculo');
module.exports = {

    async store(req, res) {
        try {
            const veiculo_id = req.params.id;
            const { latitude, longitude } = req.headers;
            const veiculo = await Veiculo.findByPk(veiculo_id)
            if (!veiculo) {
                return res.status(404).json({ erro: 'Veículo não encontrada' });
            }
            const posicao = await PosicaoVeiculo.findOne(
                {where: {veiculo_id: veiculo_id}}
            )
            if(posicao){
                return res.status(400).json({ erro: 'Posiçao do veículo já cadastrado' });
            }
            PosicaoVeiculo.create
            await PosicaoVeiculo.create({
                latitude: latitude,
                longitude: longitude,
                veiculo_id: veiculo_id
            }).then(function(result){
                return res.status(200).json(result)
            })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async index(req, res) {
        try {
            await PosicaoVeiculo.findAll().then(function (result) {
                return res.json(result)
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            const posicao_id = req.params.id;
            const {latitude, longitude} = req.headers;
            var result = await PosicaoVeiculo.findByPk(posicao_id);
            if (!result) {
                return res.status(404).json({ erro: 'Posicão não encontrada' })
            }
            await PosicaoVeiculo.update(
                { latitude: latitude,
                  longitude: longitude
                },
                { where: { id: posicao_id } }
            ).then(function (result) {
                return res.status(200).json({
                    message: 'Posição atualizada com sucesso'
                })
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    },

    async delete(req, res) {
        try {
            const posicao_id = req.params.id;
            await PosicaoVeiculo.destroy({
                where: {id:posicao_id}
            }).then(function (result) {
                return res.status(200).json({ message: 'removida com sucesso' })
            });

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }
}
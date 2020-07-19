const Linha = require('../models/Linha');
const Veiculo = require('../models/Veiculo');
module.exports = {

    async store(req, res) {
        try {
            const linha_id = req.params.id;
            console.log(linha_id)
            const { name, modelo } = req.body;
            const linha = await Linha.findByPk(linha_id)
            if (!linha) {
                return res.status(404).json({ erro: 'Linha não encontrada' });
            }
            await Veiculo.create({
                name,
                modelo,
                linha_id
            }).then(function (result) {
                return res.status(200).json(result)
            })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    },

    async index(req, res) {
        try {
            await Veiculo.findAll().then(function (result) {
                return res.status(200).json(result)
            })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id
            const { modelo, name } = req.body;
            console.log(modelo)
            var result = await Veiculo.findByPk(id);
            if (!result) {
                return res.status(404).json({ erro: 'Veiculo não encontrada' })
            }
            await Veiculo.update(
                {
                    name: name,
                    modelo: modelo
                },
                { where: { id: id } }
            ).then(function (result) {
                return res.status(200).json({
                    message: 'Veículo atualizada com sucesso'
                })
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async delete(req, res) {
        try {
            const id = req.params.id;
            var veiculo = await Veiculo.findByPk(id);
            if (!veiculo) {
                return res.status(404).json({ erro: 'Veículo não encontrada' })
            }

            await Veiculo.destroy({
                where: {id: id}
            }).then(function(result){
                return res.status(200).json({message: 'Veículo removida com sucesso'});
            })

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }
}
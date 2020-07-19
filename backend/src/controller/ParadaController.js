const Parada = require('../models/Parada');
const Linha = require('../models/Linha');
module.exports = {

    async store(req, res) {
        try {
            const linha_id = req.params.id;
            const  {name} = req.body;
            const { latitude, longitude} = req.headers;
            const linha = await Linha.findByPk(linha_id)
            if (!linha) {
                return res.status(404).json({ erro: 'Linha não encontrada' });
            }
            const [parada] = await Parada.findOrCreate(
                {
                    where: { name },
                    defaults: {
                        latitude: latitude,
                        longitude: longitude
                    }
                }
            )

            await linha.addParada(parada).then(function (result) {
                return res.status(200).json({ message: 'Parada adicionada com sucesso' })
            })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    },

    async index(req, res) {
        try {
            await Parada.findAll().then(function (result) {
                return res.json(result)
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            const parada_id = req.params.id;
            const name = req.body;
            var result = await Parada.findByPk(parada_id);
            if (!result) {
                return res.status(404).json({ erro: 'Parada não encontrada' })
            }
            await Parada.update(
                { name: name.name },
                { where: { id: parada_id } }
            ).then(function (result) {
                return res.status(200).json({
                    message: 'Parada atualizada com sucesso'
                })
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    },

    async delete(req, res) {
        try {
            const linha_id = req.params.id;
            const { name } = req.body;

            const linha = await Linha.findByPk(linha_id);

            if (!linha) {
                return res.status(400).json({ error: 'Linha não encontrada' });
            }

            const parada = await Parada.findOne({
                where: { name }
            });

            await linha.removeParada(parada).then(function (result) {
                return res.status(200).json({ message: 'Parada removida com sucesso' })
            });

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }
}
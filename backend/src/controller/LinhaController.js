const Linha = require('../models/Linha');

module.exports = {

    //Metodo para cadastrar linha
    async store(req, res){
       try {
        const name = req.body;
        await Linha.create(name).then(function(result){
            return res.status(200).json({message: 'Linha cadastrada com sucesso'});
        });
       } catch (error) {
            return res.status(400).json({ error: error.message });        
        }   
    },

    //Metodo para listar linhas
    async index(req,res){
        try {
            await Linha.findAll().then(function (result){
                return res.json(result)
            });     
        } catch (erro) {
            return res.status(400).json({ error: error.message });        
        }
    },

    //atualizar linhas 
    async update(req,res){
        try {
            const id = req.params.id;
            const name = req.body;
            var result = await Linha.findByPk(id);
            if(!result){
                return res.status(404).json({erro: 'Linha não encontrada'})
            }
            await Linha.update(
                {name: name.name},
                {where: {id: id}}
                ).then(function (result){
                    return res.status(200).json({
                        message: 'Linha atualizada com sucesso'
                    })
                });
        } catch (error) {
            return res.status(400).json({ error: error.message });        
        }
    },

    // Apagar linha 
    async delete(req, res){
        const id = req.params.id;
        var result = await Linha.findByPk(id);
        if(!result){
            return res.status(404).json({erro: 'Linha não encontrada'})
        }

        await Linha.destroy({
            where: {id: id}
        }).then(function(result){
            return res.status(200).json({message: 'Linha removida com sucesso'});
        })
    }
}
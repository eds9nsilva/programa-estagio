const express = require('express');
const LinhaController = require('./controller/LinhaController');
const ParadaController = require('./controller/ParadaController');
const VeiculoController = require('./controller/VeiculoController');
const PosicaoVeiculoController = require('./controller/PosicaoVeiculoController');
const Method = require('./controller/MethodController');
const ParadaPosicaoController = require('./controller/ParadaPosicaoController');
const routes = express.Router();

/**
 * @api {post} http://localhost:3333/linha Cadastrar uma linha
 * @apiGroup Linha
 * @apiSuccess {String} Variaveis.name Nome da linha cadastrada
 * 
 * 
 * 
 * @apiParamExample {json} Input
 *    {
 *      "name": "Nome da Linha"
 *    }
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Linha cadastrada com sucesso"
 *    }
 *
 */
routes.post('/linha', LinhaController.store);

/**
 * @api {get} http://localhost:3333/linha Listar todas as linha
 * @apiGroup Linha
 * 
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "Linha A",
 *      "Linha B",
 *      "Linha C"
 *    }
 *
 */
routes.get('/linha', LinhaController.index);

/**
 * @api {put} http://localhost:3333/linha/id Atualizar uma linha
 * @apiGroup Linha
 * @apiSuccess {String} title.name Novo nome da linha
 * @apiParam {id}  id id da Linha
 * 
 * 
 * @apiParamExample {json} Input
 *    {
 *      "name": "Nome da Linha"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Linha não encontrada"
 *     }
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Linha atualizado com sucesso"
 *    }
 *
 */
routes.put('/linha/:id', LinhaController.update);

/**
 * @api {delete} http://localhost:3333/linha/id Deletar uma linha
 * @apiGroup Linha
 * @apiParam {id}  id id da Linha
 * 
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Linha removida com sucessoo"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Linha não encontrada"
 *     }
 */
routes.delete('/linha/:id', LinhaController.delete);





/**
 * @api {post} http://localhost:3333/parada/id Cadastrar uma Parada
 * @apiGroup Parada
 * @apiParam {id}  id id da Linha
 *  @apiParam {Double}  Longitude Parâmetro passado pelo header
 *  @apiParam {Double}  Latitude Parâmetro passado pelo header
 * 
 * 
 * 
 * @apiParamExample {json} Input
 *    {
 *      "name": "Nome da parada"
 *    }
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Parada Cadastrada com sucessoo"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Linha não encontrada"
 *     }
 */
routes.post('/parada/:id', ParadaController.store);



/**
 * @api {get} http://localhost:3333/parada/id Listar todas as paradas
 * @apiGroup Parada
 * @apiParam {id}  id id da Linha
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "Parada A",
 *      "Parada B",
 *      "Parada C"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Linha não encontrada"
 *     }
 */
routes.get('/parada', ParadaController.index);

/**
 * @api {put} http://localhost:3333/parada/id Atualizar uma Parada
 * @apiGroup Parada
 * @apiSuccess {String} title.name Novo nome da Parada
 * @apiParam {id}  id id da Linha
 * 
 * 
 * @apiParamExample {json} Input
 *    {
 *      "name": "Nome da Parada"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Linha não encontrada"
 *     }
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Parada atualizada com sucesso"
 *    }
 *
 */
routes.put('/parada/:id', ParadaController.update);


/**
 * @api {delete} http://localhost:3333/parada/id Deletar uma Parada
 * @apiGroup Parada
 * @apiParam {id}  id id da Linha
 * 
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Parada removida com sucessoo"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Linha não encontrada"
 *     }
 */
routes.delete('/parada/:id', ParadaController.delete);


/**
 * @api {post} http://localhost:3333/veiculo/id Cadastrar um Veículo
 * @apiGroup Veículo
 * @apiParam {id}  id id da Linha
 * @apiSuccess {String} Variaveis.name Nome do Veículo
 * @apiSuccess {String} Variaveis.modelo Modelo do veículo
 * 
 * 
 * @apiParamExample {json} Input
 *    {
 *      "name": "Nome do veículo",
 *      "modelo": "Modelo do veículo"     
 *     }
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Veículo Cadastrado com sucessoo"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Linha não encontrada"
 *     }
 */
routes.post('/veiculo/:id', VeiculoController.store);


/**
 * @api {get} http://localhost:3333/veiculo/ Listar todos os veículos
 * @apiGroup Veículo
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "Veículo A",
 *      "Veículo B",
 *      "Veículo C"
 *    }
 *
 */
routes.get('/veiculo', VeiculoController.index);
/**
 * @api {put} http://localhost:3333/veiculo/id Atualizar um Veículo
 * @apiGroup Veículo
 * @apiSuccess {String} title.name Novo nome do Veículo
 * @apiParam {id}  id id do Veículo
 * 
 * 
 * @apiParamExample {json} Input
 *    {
 *      "name": "Nome do veículo",
 *      "modelo": "Nome do modelo"

 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Veículo não encontrado"
 *     }
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Parada atualizada com sucesso"
 *    }
 *
 */
routes.put('/veiculo/:id', VeiculoController.update);

/**
 * @api {delete} http://localhost:3333/veiculo/id Deletar um Veículo
 * @apiGroup Veículo
 * @apiParam {id}  id id do Veículo
 * 
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Veículo removida com sucessoo"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Veículo não encontrado"
 *     }
 */
routes.delete('/veiculo/:id', VeiculoController.delete);


/**
 * @api {post} http://localhost:3333/posicao/id Cadastrar posiçao do veículo
 * @apiGroup Posição
 * @apiParam {id}  id id do Veículo
 * @apiParam {Double} Variaveis.latitude Latitude do Veículo. Parâmetro passado pelo header
 * @apiParam {Double} Variaveis.longitude Longitude do veículo. Parâmetro passado pelo header
 * 
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Posição Cadastrado com sucessoo"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Veículo não encontrado"
 *     }
 */
routes.post('/posicao/:id', PosicaoVeiculoController.store);

/**
 * @api {get} http://localhost:3333/posicao/ Listar todas as Posições
 * @apiGroup Posição
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "Posição A",
 *      "Posição B",
 *      "Posição C"
 *    }
 *
 */
routes.get('/posicao', PosicaoVeiculoController.index);
/**
 * @api {put} http://localhost:3333/veiculo/id Atualizar uma posição
 * @apiGroup Posição
 * @apiParam {id}  id id da Posição
 * @apiParam {Double} Variaveis.latitude Latitude do Veículo. Parâmetro passado pelo header
 * @apiParam {Double} Variaveis.longitude Longitude do veículo. Parâmetro passado pelo header
 * 
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Posição não encontrado"
 *     }
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Posição atualizada com sucesso"
 *    }
 *
 */
routes.put('/posicao/:id', PosicaoVeiculoController.update);

/**
 * @api {delete} http://localhost:3333/posicao/id Deletar uma Posição
 * @apiGroup Posição
 * @apiParam {id}  id id da Posição
 * 
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Posição removida com sucessoo"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Posição não encontrado"
 *     }
 */
routes.delete('/posicao/:id', PosicaoVeiculoController.delete);





/**
 * @api {get} http://localhost:3333/paradaLinha/id Retornar linha associadas a uma parada
 * @apiGroup Métodos
 * @apiParam {id}  id id da parada
 * 
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "Linha A", 
 *      "Linha B",
 *      "Linha C"
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Parada não encontrado"
 *     }
 */
routes.get('/paradaLinha/:id', Method.ParadaLinha);


/**
 * @api {get} http://localhost:3333/veiculoLinha/id Retornar veículos associados a uma linha
 * @apiGroup Métodos
 * @apiParam {id}  id id da linha
 * 
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "Veículo A", 
 *      "Veículo B",
 *      "Veículo C"
 *    }
 */
routes.get('/veiculoLinha/:id', Method.VeiculoLinha);




/**
 * @api {get} http://localhost:3333/paradaPosicao/ Retornar a parada mais próxima
 * @apiGroup Extra

 * @apiSuccess {Double} title.latitude Latitude
 * @apiSuccess {Double} title.longitude Longitude
 * @apiSuccessExample {json} Retorno
 *    HTTP/1.1 200 OK
 *    {
 *      "distance": "Distância entre os dois pontos",
 *      "distanceValue": 0,
        "duration": "Tempo",
        "durationValue": 0,
        "origin": "Origem",
        "destination": "Destino",
 *    }
 */
routes.get('/paradaPosicao', ParadaPosicaoController.index);


module.exports = routes;
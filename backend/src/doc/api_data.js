define({ "api": [
  {
    "type": "get",
    "url": "http://localhost:3333/paradaPosicao/",
    "title": "Retornar a parada mais próxima",
    "group": "Extra",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "title.latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "title.longitude",
            "description": "<p>Longitude</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"distance\": \"Distância entre os dois pontos\",\n  \"distanceValue\": 0,\n     \"duration\": \"Tempo\",\n     \"durationValue\": 0,\n     \"origin\": \"Origem\",\n     \"destination\": \"Destino\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Extra",
    "name": "GetHttpLocalhost3333Paradaposicao"
  },
  {
    "type": "delete",
    "url": "http://localhost:3333/linha/id",
    "title": "Deletar uma linha",
    "group": "Linha",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da Linha</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Linha removida com sucessoo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Linha não encontrada\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Linha",
    "name": "DeleteHttpLocalhost3333LinhaId"
  },
  {
    "type": "get",
    "url": "http://localhost:3333/linha",
    "title": "Listar todas as linha",
    "group": "Linha",
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"Linha A\",\n  \"Linha B\",\n  \"Linha C\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Linha",
    "name": "GetHttpLocalhost3333Linha"
  },
  {
    "type": "post",
    "url": "http://localhost:3333/linha",
    "title": "Cadastrar uma linha",
    "group": "Linha",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Variaveis.name",
            "description": "<p>Nome da linha cadastrada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Linha cadastrada com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Nome da Linha\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Linha",
    "name": "PostHttpLocalhost3333Linha"
  },
  {
    "type": "put",
    "url": "http://localhost:3333/linha/id",
    "title": "Atualizar uma linha",
    "group": "Linha",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title.name",
            "description": "<p>Novo nome da linha</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Linha atualizado com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da Linha</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Nome da Linha\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Linha não encontrada\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Linha",
    "name": "PutHttpLocalhost3333LinhaId"
  },
  {
    "type": "get",
    "url": "http://localhost:3333/paradaLinha/id",
    "title": "Retornar linha associadas a uma parada",
    "group": "Métodos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da parada</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"Linha A\", \n  \"Linha B\",\n  \"Linha C\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Parada não encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Métodos",
    "name": "GetHttpLocalhost3333ParadalinhaId"
  },
  {
    "type": "get",
    "url": "http://localhost:3333/veiculoLinha/id",
    "title": "Retornar veículos associados a uma linha",
    "group": "Métodos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da linha</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"Veículo A\", \n  \"Veículo B\",\n  \"Veículo C\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Métodos",
    "name": "GetHttpLocalhost3333VeiculolinhaId"
  },
  {
    "type": "delete",
    "url": "http://localhost:3333/parada/id",
    "title": "Deletar uma Parada",
    "group": "Parada",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da Linha</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Parada removida com sucessoo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Linha não encontrada\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Parada",
    "name": "DeleteHttpLocalhost3333ParadaId"
  },
  {
    "type": "get",
    "url": "http://localhost:3333/parada/id",
    "title": "Listar todas as paradas",
    "group": "Parada",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da Linha</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"Parada A\",\n  \"Parada B\",\n  \"Parada C\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Linha não encontrada\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Parada",
    "name": "GetHttpLocalhost3333ParadaId"
  },
  {
    "type": "post",
    "url": "http://localhost:3333/parada/id",
    "title": "Cadastrar uma Parada",
    "group": "Parada",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da Linha</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "Longitude",
            "description": "<p>Parâmetro passado pelo header</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "Latitude",
            "description": "<p>Parâmetro passado pelo header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Nome da parada\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Parada Cadastrada com sucessoo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Linha não encontrada\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Parada",
    "name": "PostHttpLocalhost3333ParadaId"
  },
  {
    "type": "put",
    "url": "http://localhost:3333/parada/id",
    "title": "Atualizar uma Parada",
    "group": "Parada",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title.name",
            "description": "<p>Novo nome da Parada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Parada atualizada com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da Linha</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Nome da Parada\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Linha não encontrada\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Parada",
    "name": "PutHttpLocalhost3333ParadaId"
  },
  {
    "type": "delete",
    "url": "http://localhost:3333/posicao/id",
    "title": "Deletar uma Posição",
    "group": "Posição",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da Posição</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Posição removida com sucessoo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Posição não encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Posição",
    "name": "DeleteHttpLocalhost3333PosicaoId"
  },
  {
    "type": "get",
    "url": "http://localhost:3333/posicao/",
    "title": "Listar todas as Posições",
    "group": "Posição",
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"Posição A\",\n  \"Posição B\",\n  \"Posição C\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Posição",
    "name": "GetHttpLocalhost3333Posicao"
  },
  {
    "type": "post",
    "url": "http://localhost:3333/posicao/id",
    "title": "Cadastrar posiçao do veículo",
    "group": "Posição",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id do Veículo</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "Variaveis.latitude",
            "description": "<p>Latitude do Veículo. Parâmetro passado pelo header</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "Variaveis.longitude",
            "description": "<p>Longitude do veículo. Parâmetro passado pelo header</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Posição Cadastrado com sucessoo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Veículo não encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Posição",
    "name": "PostHttpLocalhost3333PosicaoId"
  },
  {
    "type": "put",
    "url": "http://localhost:3333/veiculo/id",
    "title": "Atualizar uma posição",
    "group": "Posição",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da Posição</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "Variaveis.latitude",
            "description": "<p>Latitude do Veículo. Parâmetro passado pelo header</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "Variaveis.longitude",
            "description": "<p>Longitude do veículo. Parâmetro passado pelo header</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Posição não encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Posição atualizada com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Posição",
    "name": "PutHttpLocalhost3333VeiculoId"
  },
  {
    "type": "delete",
    "url": "http://localhost:3333/veiculo/id",
    "title": "Deletar um Veículo",
    "group": "Veículo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id do Veículo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Veículo removida com sucessoo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Veículo não encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Veículo",
    "name": "DeleteHttpLocalhost3333VeiculoId"
  },
  {
    "type": "get",
    "url": "http://localhost:3333/veiculo/",
    "title": "Listar todos os veículos",
    "group": "Veículo",
    "success": {
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"Veículo A\",\n  \"Veículo B\",\n  \"Veículo C\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Veículo",
    "name": "GetHttpLocalhost3333Veiculo"
  },
  {
    "type": "post",
    "url": "http://localhost:3333/veiculo/id",
    "title": "Cadastrar um Veículo",
    "group": "Veículo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id da Linha</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Nome do veículo\",\n  \"modelo\": \"Modelo do veículo\"     \n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Variaveis.name",
            "description": "<p>Nome do Veículo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Variaveis.modelo",
            "description": "<p>Modelo do veículo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Veículo Cadastrado com sucessoo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Linha não encontrada\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Veículo",
    "name": "PostHttpLocalhost3333VeiculoId"
  },
  {
    "type": "put",
    "url": "http://localhost:3333/veiculo/id",
    "title": "Atualizar um Veículo",
    "group": "Veículo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title.name",
            "description": "<p>Novo nome do Veículo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Retorno",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Parada atualizada com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>id do Veículo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Nome do veículo\",\n  \"modelo\": \"Nome do modelo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"erro\": \"Veículo não encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "Veículo",
    "name": "PutHttpLocalhost3333VeiculoId"
  }
] });

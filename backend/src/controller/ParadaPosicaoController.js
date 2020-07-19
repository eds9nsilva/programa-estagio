const Distancia = require('google-distance');
const Parada = require('../models/Parada');


module.exports = {
    async index(req, res) {
        try {
            const { latitude, longitude } = req.body;
            let result = await Parada.findAll();
            Distancia.apiKey = 'AIzaSyBraNkfMc6HgcijsKXgptnjnXJvSc6wa2U';
            Distancia.get(
                {
                    origin: `${latitude}, ${longitude}`,
                    destination: `${result[1].latitude}, ${result[1].longitude}`
                },
                function (err, data) {
                    if (err) return console.log(err);
                    menor = data['distanceValue'];
                    for (let i = 0; i < result.length; i++) {
                        Distancia.get(
                            {
                                origin: `${latitude}, ${longitude}`,
                                destination: `${result[i].latitude}, ${result[i].longitude}`
                            },
                            function (err, data) {
                                if (err) return console.log(err);
                                result = data;
                                if (result['distanceValue']<menor) {
                                    menor = result;
                                    return res.json(menor)
                                }
                            }
                        );
                    }
                }
            );
         

        } catch (error) {
            return console.log(error);
        }

    }
}
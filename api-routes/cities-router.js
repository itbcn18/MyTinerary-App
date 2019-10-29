// Importamos
const express = require('express');
const cityRouter = express.Router();  // Del express sólo vamos a utilizar el "Router" que es parte del Express Object
// Traer el CityModel(.js)  Model para hacer "Querys" y encontrar datos
const cityModel = require('../models/cityModel')


// Creación de las rutas...

// Ruta de "test"
cityRouter.get('/test', (req, res) => {   //Cuando se haga un "Get de la ruta /test" (vayas a la ruta /test)  ----  ((req, res) callBack function, acepta 2 parámetros, que son lo que pedimos y lo que recibimos "request", "response") Se está haciendo un "fetch" los datos de la BBDD
      res.send({ msg: 'Cities test route.' })  // La respuesta que vas a enviar
});

cityRouter.post('/test', (req, res) => { 
    res.send({ msg: 'Cities test route Post.' })
});

/*  ==========  Fin Ruta TEST  =========== */

/* Ruta de Cities
cityRouter.get('/api-routes/cities-router.js', (req, res) => {
    CityModel.find()  // Se toma el modelo y se utiliza el método .find que devolverá una "promise"
        .then(cityModel => require.json(cityModel))   // A través de una promesa, nos da los datos que haya en el cityModels.js que es el modelo establecido para las "Cities" que está en formato "Json" y que nos pase esos datos dentro de ese file
});  */

/* Get all cities */
cityRouter.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });
    
// POST Route to add new ones
    cityRouter.post('/', (req, res) => {
        const newCity = new cityModel({  // Create a new instance of our City model and you save it in a variable and pass it an object. Your model properties will have the values of what you pass in the req.body
            name: req.body.name,  // Viene del "body" del "request"
            country: req.body.country
        })
        newCity.save()  // Guardar esa nueva adición a la BBDD
          .then(city => {  // Finally call save(). This mongoose method will return a promise. If resolved you can send back the object you created in your response. If rejected you will debug your code.
          res.send(city)
          })
          .catch(err => {
          res.status(500).send("Server error")}) 
    });


module.exports = cityRouter;   //  = "export default cityRouter" en ecms 6. Se exporta para que los demas files puedan "leer" lo que hay acá
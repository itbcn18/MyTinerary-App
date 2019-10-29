// Set up our app and build routes

// Requires from dependencies
const express = require('express')  // Encargado de tomar las peticiones del frontend y enviarselas al servidor
const app = express(); // Inicializar Express
const mongoose = require('mongoose')
// MiddleWares - It's good practice to install at least these two middlewares. Middleware is used to do something before a request is processed (eg: check if a user is authenticated)
const bodyParser = require("body-parser");  // Permitirá tomar peticiones y data del body
const cors = require("cors");


// Require other files
const citiesRouter = require("./api-routes/cities-router.js");  // Cualquier request que se haga a esa ruta, quiero que vaya a ese file


app.use(bodyParser.json());  // Bodyparser Middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());



// Connect to Mongo


// Traer el archivo "keys" a este archivo y asignarlo a una variable
//  DB Config
const db = require('./config/keys').mongoURI;  // Se requiere ese "file" que está dentro de la carpeta de "config" y lo que queremos de ahí es el "mongoURI"

// Connection a Mongo DB a través de "Mongoose" y basado en una "promise" (Biblioteca que permite modelar los datos de la BBDD, le da la estructura ya que MongoDB no se preocupa por eso)
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))  // Cuando se conecte se quiere enviar un mensaje a través de la consola por lo que se utiliza un "CallBack function" usando en este caso un "arrow function" y en caso de haber un error, también comunicarlo en la consola
  .catch(err => console.log(err));


// USE ROUTES  -  Create the routes here

// Sample route as an example with a route the way we're used to seeing it
app.get('/sample', function (req, res) {
  res.send('Hello World')
});

// Call to “app.use”
app.use('/cities', citiesRouter);   // Cuando vayas al file /cities haz lo que diga/ devuélveme lo que haya especificado en la "const" = "citiesRouter" especificado más arriba en las constantes que es un file





// START THE SERVER     --    Correr el servidor una vez que se haya conectado,en el puerto que vayamos a usar
  const port = process.env.PORT || 5000;   // Puerto a usar

  app.listen(port, () => console.log(`Server runing on port ${port}`));// Servidor para el Backend. Que la app "escuche" al puerto que va a correr y muestre un mensaje en la consola




// Connect to Mongo DB  
//-- Esta conexión se puede escribir en un file llamado "db.js" para n código más limpio. Si conecto desde este otro file, en el server.js tengo que hacer un request del mismo
//const express = require('express');
// const mongoose = require('mongoose');
// const db = 'mongodb+srv://rominaUbiqum:lmqtr1000p@cluster0-umlgk.mongodb.net/test?retryWrites=true&w=majority';
// //const app = express();
//   const connectDB = async () => {
//     try {
//        await mongoose.connect(db, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true 
//          })
//        console.log('MongoDb Connected...')
//     } catch(err) {
//         console.error(err.message)
//         process.exit(1);
//     }
// }
// connectDB()
// app.get('/', (req, res) => res.send("Hello World, I am mern Barcelona"));
// app.get('/test', (req, res) => res.send({"msg": "I am test page"})); 
// app.get('/cities/all', require ('./cities'));
// //app.use('/cities', citiesRouter);
// //const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server runing on port ${port}`))







// START THE SERVER

// app.listen(port);  // Servidor para el Backend (La "app" escuchará a la variable "port")
// console.log('Magic happens on port ' + port);
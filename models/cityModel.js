const mongoose = require('mongoose');  // Traer a mongoose
//const citySchema = mongoose.Schema;

const citySchema = new  mongoose.Schema ({  // Contendrá los "fields" que queremos en nuestra base de datos dentro de este objeto
name:{
    type: String,
    require: true,
    unique: true
    },
country: {
        type: String,
        required: true
    },
img: {
        type: String,
    }
})

// Exportamos para tener acceso a él, fuera del file, desde otros files
module.exports = mongoose.model('city', citySchema)  // Primer argumento es un String del Schema y el segndo parámetro es el esquema que hemos definido
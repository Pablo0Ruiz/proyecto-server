const mongoose= require("mongoose")

const dbConnect = () => {
    const db_uri = process.env.DB_URI
    mongoose.set('strictQuery', false)
    try{
    mongoose.connect(db_uri)
    } catch (error) {
        console.err("no se conecto", error)
    }
    mongoose.connection.on('connected', ()=> console.log('conectado a la db'));
}

module.exports = dbConnect
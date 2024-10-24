const express = require("express")
const app = express()
const loggerStream = require("./utils/handleLogger")
// const cors = require("cors")
require('dotenv').config();
const dbConnect = require("./config/mongo")
// const router= require("./routes/tracks")
const morganBody = require("morgan-body")
const swaggerUi = require("swagger-ui-express")
const swaggerSpecs = require("./docs/swagger")

app.use(express.static("storage"));


// app.arguments(cors())
app.use(express.json())
app.use("/api-docs",

    swaggerUi.serve,

    swaggerUi.setup(swaggerSpecs)

)
app.use("/api", require("./routes"));





morganBody(app, {

    noColors: true, //limpiamos el String de datos lo máximo posible antes de mandarlo a Slack

    skip: function (req, res) { //Solo enviamos errores (4XX de cliente y 5XX de servidor)

        return res.statusCode < 400

    },

    stream: loggerStream

})








const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("servidor escuchando en el puerto" + port)
    dbConnect();
})

module.exports = app
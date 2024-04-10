const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.editVivienda = (req, res) => {

    const VIVIENDA_ID = req.body.VIVIENDA_ID;

    const MUNICIPIO_ID = req.body.VALUES.MUNICIPIO_ID;
    const VIVIENDA_DIRECCION = req.body.VALUES.VIVIENDA_DIRECCION;
    const VIVIENDA_CAPACIDAD = req.body.VALUES.VIVIENDA_CAPACIDAD;
    const VIVIENDA_NIVELES = req.body.VALUES.VIVIENDA_NIVELES;

    console.log(VIVIENDA_ID);

    const consulta = SQLScripts.scriptEditVivienda
    console.log(consulta);

    editVivienda = () => {
        
        dbConnection.query(consulta, [MUNICIPIO_ID, VIVIENDA_DIRECCION, VIVIENDA_CAPACIDAD, VIVIENDA_NIVELES, VIVIENDA_ID], (err, results) => {
            if (err) {
                console.log(err)
                res.send({ statusCode: 400, message: "wrong data" })
            } else {
                if (results) {
                    console.log(results)
                    res.json({ statusCode: 200, message: "success", data: results })
                } else {
                    res.json({ statusCode: 400, message: "wrong data" })
                }
            }
        })
    }

    editVivienda()
}
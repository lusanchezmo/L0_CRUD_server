const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.insertPersona = (req, res) => {

    const MUNICIPIO_ID = req.body.MUNICIPIO_ID;
    const VIVIENDA_ID = req.body.VIVIENDA_ID;
    const PERSONA_NOMBRE = req.body.PERSONA_NOMBRE;
    const PERSONA_APELLIDO = req.body.PERSONA_APELLIDO;
    const PERSONA_SEXO = req.body.PERSONA_SEXO;
    const PERSONA_EDAD = req.body.PERSONA_EDAD;
    const PERSONA_TELEFONO = req.body.PERSONA_TELEFONO;
    const PERSONA_RESPONSABLE = req.body.PERSONA_RESPONSABLE;

    const consulta = SQLScripts.scriptInsertPerson

    insertPersona = () => {
        
        dbConnection.query(consulta, [MUNICIPIO_ID,VIVIENDA_ID,PERSONA_NOMBRE,PERSONA_APELLIDO,PERSONA_SEXO, PERSONA_EDAD,PERSONA_TELEFONO, PERSONA_RESPONSABLE], (err, results) => {
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

    insertPersona()
}
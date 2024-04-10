const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.editPersona = (req, res) => {

    const PERSONA_ID = req.body.PERSONA_ID;
    const MUNICIPIO_ID = req.body.VALUES.MUNICIPIO_ID;
    const VIVIENDA_ID = req.body.VALUES.VIVIENDA_ID;
    const PERSONA_NOMBRE = req.body.VALUES.PERSONA_NOMBRE;
    const PERSONA_APELLIDO = req.body.VALUES.PERSONA_APELLIDO;
    const PERSONA_SEXO = req.body.VALUES.PERSONA_SEXO;
    const PERSONA_EDAD = req.body.VALUES.PERSONA_EDAD;
    const PERSONA_TELEFONO = req.body.VALUES.PERSONA_TELEFONO;
    const PERSONA_RESPONSABLE = req.body.VALUES.PERSONA_RESPONSABLE;

    console.log(PERSONA_ID);

    const consulta = SQLScripts.scriptEditPersona

    editPersona = () => {
        
        dbConnection.query(consulta, [MUNICIPIO_ID, VIVIENDA_ID, PERSONA_NOMBRE, PERSONA_APELLIDO, PERSONA_SEXO, PERSONA_EDAD, PERSONA_TELEFONO, PERSONA_RESPONSABLE, PERSONA_ID], (err, results) => {
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

    editPersona()
}
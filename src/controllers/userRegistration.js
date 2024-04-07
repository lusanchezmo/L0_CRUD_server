const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')
/*const jwt = require('jsonwebtoken')

const loginValidator = require('../objects/loginValidator')*/

/*
Ejemplo consulta: 
http://localhost:3000/userRegistration

{
    "DEP_DEPARTAMENTO_ID" :1, 
    "MUNICIPIO_ID": 1, 
    "VIVIENDA_ID": 1,
    "PERSONA_NOMBRE": "julio", 
    "PERSONA_APELLIDO": "cortazasr", 
    "PERSONA_SEXO": 1, 
    "PERSONA_EDAD": 290, 
    "PERSONA_TELEFONO": 1232323
}


*/ 

module.exports.userRegistration = (req, res) => {

    const DEP_DEPARTAMENTO_ID = req.body.DEP_DEPARTAMENTO_ID //nombres: [puntualidad, inteligencia, react js]
    const MUNICIPIO_ID = req.body.MUNICIPIO_ID
    const VIVIENDA_ID = req.body.VIVIENDA_ID
    const PERSONA_NOMBRE = req.body.PERSONA_NOMBRE
    const PERSONA_APELLIDO = req.body.PERSONA_APELLIDO
    const PERSONA_SEXO = req.body.PERSONA_SEXO
    const PERSONA_EDAD = req.body.PERSONA_EDAD
    const PERSONA_TELEFONO = req.body.PERSONA_TELEFONO

    const consulta = SQLScripts.scriptInsertPerson

    insertPersonTo = () => {
        
        dbConnection.query(consulta, [DEP_DEPARTAMENTO_ID,MUNICIPIO_ID, VIVIENDA_ID ,PERSONA_NOMBRE, PERSONA_APELLIDO,PERSONA_SEXO,PERSONA_EDAD,PERSONA_TELEFONO], (err, results) => {
            if (err) {
                console.log(err)
                res.send({ statusCode: 400, message: "wrong data" })
            } else {
                if (results) {
                    console.log(results)
                    res.json({ statusCode: 200, message: "insertado", data: results })
                } else {
                    res.json({ statusCode: 400, message: "wrong data" })
                }
            }
        })
    }

    insertPersonTo()
}
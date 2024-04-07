const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.deletePersona = (req, res) => {

    const PERSONA_ID = req.body.PERSONA_ID;

    const consulta = SQLScripts.scriptDeletePersona

    deletePersona = () => {
        
        dbConnection.query(consulta, [PERSONA_ID], (err, results) => {
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

    deletePersona()
}
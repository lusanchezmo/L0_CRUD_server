const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.getPersonas = (req, res) => {


    const consulta = SQLScripts.scriptGetPersonas

    getPersonas = () => {
        
        dbConnection.query(consulta, [], (err, results) => {
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

    getPersonas()
}
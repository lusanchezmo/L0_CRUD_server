const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.getDepartamentos = (req, res) => {

    const consulta = "SELECT DEPARTAMENTO_ID, DEPARTAMENTO_NOMBRE FROM departamento;"//SQLScripts.scriptgetDepartamentos

    getDepartamentos = () => {
        
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

    getDepartamentos()
}
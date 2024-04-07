const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.deleteVivienda = (req, res) => {

    const VIVIENDA_ID = req.body.VIVIENDA_ID;

    const consultaDEleteRelacionesDueno = SQLScripts.scriptDeleteRelacionDuenoVivienda
    const consultaDEleteVivienda = SQLScripts.scriptDeleteVivienda
    
    deleteRelacionDueno = () => {
        
        dbConnection.query(consultaDEleteRelacionesDueno, [VIVIENDA_ID], (err, results) => {
            if (err) {
                console.log(err)
                res.send({ statusCode: 400, message: "wrong data" })
            } else {
                if (results) {
                    console.log(results)
                    deleteVivienda();
                    //res.json({ statusCode: 200, message: "success", data: results })
                } else {
                    res.json({ statusCode: 400, message: "wrong data" })
                }
            }
        })
    }

    deleteVivienda = () => {
        dbConnection.query(consultaDEleteVivienda, [VIVIENDA_ID], (err, results) => {
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

    deleteRelacionDueno()
}
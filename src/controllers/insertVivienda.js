const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.insertVivienda = (req, res) => {

    const MUNICIPIO_ID = req.body.MUNICIPIO_ID;
    const VIVIENDA_DIRECCION = req.body.VIVIENDA_DIRECCION;
    const VIVIENDA_CAPACIDAD = req.body.VIVIENDA_CAPACIDAD;
    const VIVIENDA_NIVELES = req.body.VIVIENDA_NIVELES;
    const PERSONA_ID = req.body.PERSONA_ID;

    const consultaVivienda = "INSERT INTO `vivienda` (`MUNICIPIO_ID`, `VIVIENDA_DIRECCION`, `VIVIENDA_CAPACIDAD`, `VIVIENDA_NIVELES`) VALUES (?, ?, ?, ?);" //SQLScripts.scriptInsertPerson
    const consultaDueno = "INSERT INTO `persona_es_duena` (`VIVIENDA_ID`, `PERSONA_ID`) VALUES (?, ?);"

    insertVivienda = () => {
        
        dbConnection.query(consultaVivienda, [MUNICIPIO_ID,VIVIENDA_DIRECCION, VIVIENDA_CAPACIDAD, VIVIENDA_NIVELES], (err, results) => {
            if (err) {
                console.log(err)
                res.send({ statusCode: 400, message: "wrong data" })
            } else {
                if (results) {
                    console.log(results)
                    if(PERSONA_ID){
                        insertDueno(results)
                    }else {
                        res.json({ statusCode: 200, message: "success", data: results })
                    }
                    
                } else {
                    res.json({ statusCode: 400, message: "wrong data" })
                }
            }
        })
    }

    insertDueno = (vivienda) => {
        dbConnection.query(consultaDueno, [vivienda.insertId, PERSONA_ID], (err, results) => {
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



    insertVivienda()
}
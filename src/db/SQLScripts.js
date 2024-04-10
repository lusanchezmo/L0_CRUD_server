module.exports = {
    scriptInsertPerson: "INSERT INTO `persona` (`MUNICIPIO_ID`, `VIVIENDA_ID`, `PERSONA_NOMBRE`, `PERSONA_APELLIDO`, `PERSONA_SEXO`, `PERSONA_EDAD`, `PERSONA_TELEFONO`, PERSONA_RESPONSABLE) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    scriptGetViviendas: "SELECT MUNICIPIO_ID,VIVIENDA_ID,VIVIENDA_DIRECCION,VIVIENDA_CAPACIDAD,VIVIENDA_NIVELES FROM vivienda;",
    scriptGetPersonas: "SELECT MUNICIPIO_ID,VIVIENDA_ID,PERSONA_ID,PERSONA_NOMBRE,PERSONA_APELLIDO,PERSONA_SEXO,PERSONA_EDAD,PERSONA_TELEFONO FROM persona;",
    scriptGetMunicipios: "SELECT DEPARTAMENTO_ID,MUNICIPIO_ID,MUNICIPIO_NOMBRE,MUNICIPIO_AREA,MUNICIPIO_PRESUPUESTO FROM municipio;",
    scriptDeletePersona: "DELETE FROM `crud`.`persona` WHERE (`PERSONA_ID` = ?);",
    scriptDeleteRelacionDuenoVivienda: "DELETE FROM `persona_es_duena` WHERE (`VIVIENDA_ID` = ?)",
    scriptDeleteVivienda: "DELETE FROM `vivienda` WHERE (`VIVIENDA_ID` = ?);",
    scriptDeletePersonaEsDuena: "DELETE FROM `persona_es_duena` WHERE (`PERSONA_ID` = ?);",
    scriptEditPersona: "UPDATE `crud`.`persona` SET `MUNICIPIO_ID` = ?, `VIVIENDA_ID` = ?, `PERSONA_NOMBRE` = ?, `PERSONA_APELLIDO` = ?, `PERSONA_SEXO` = ?, `PERSONA_EDAD` = ?, `PERSONA_TELEFONO` = ?, `PERSONA_RESPONSABLE` = ? WHERE (`PERSONA_ID` = ?);",
    scriptEditVivienda: "UPDATE `crud`.`vivienda` SET `MUNICIPIO_ID` = ?, `VIVIENDA_DIRECCION` = ?, `VIVIENDA_CAPACIDAD` = ?, `VIVIENDA_NIVELES` = ? WHERE (`VIVIENDA_ID` = ?);"
}
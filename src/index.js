require('dotenv').config({ path: './../.env' })
const express = require('express')

const app = express()
const port = process.env.DB_PORT

const routes = require('./api/endPoints')
const cors = require('cors');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["https://l0-crud-client.vercel.app"],
    methods: ["GET", "POST"]
}));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
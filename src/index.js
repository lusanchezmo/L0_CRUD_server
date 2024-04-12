require('dotenv').config({ path: './../.env' })
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const routes = require('./api/endPoints')
const cors = require('cors');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"]
}));

app.use('/', routes);

app.listen(port,"0.0.0.0", () => {
    console.log(`Example app listening on port ${port}`)
})
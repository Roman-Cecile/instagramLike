require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const PORT = process.env.PORT || 3000
const app = express();


app.use( express.urlencoded({extended: true}) );

app.use(router)

app.listen(PORT, () => {
    console.log("Branché sur le port " + PORT);
})
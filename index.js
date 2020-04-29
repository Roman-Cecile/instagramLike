require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const expressSession = require('express-session');
const path = require('path');
const PORT = process.env.PORT || 3000;
const fileUpload = require('express-fileupload');
const app = express();
app.use(fileUpload());

// app.set('views', path.join('app','views') );
// app.set('view engine', 'ejs');

app.use( express.static( path.join( __dirname, 'public' ) ) );

// recupérer les donnés dans le body (pour les requete POST et PATCH)
app.use( express.urlencoded({extended: true}) );

app.use(expressSession({
 
  secret: "monappliinstA34000", // A changer avant la prod
  resave: true ,
  saveUninitialized: true,
  cookie: { 
    secure: false, 
    maxAge: (1000*60*60)
      }


}))

// Morgan => donne de bonnes infos en console
const morgan = require('morgan');
app.use( morgan('dev') );

app.use(router)

app.listen(PORT, () => {
    console.log("Branché sur le port " + PORT);
})
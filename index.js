const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express();

dbConnection();

app.use( express.static('public') );

app.use( express.json() );

//rutas
app.use('/api/auth', require('./routes/auth'));
//eventos

/*app.get('/',(req, res)=>{
    console.log('se requiere /');
    res.json({
        ok:true
    })
})*/

app.listen( process.env.PORT,() =>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
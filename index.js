const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
require('dotenv').config();

const app = express();

dbConnection();

//CORS
app.use(cors());

app.use( express.static('public') );

app.use( express.json() );

//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));



/*app.get('/',(req, res)=>{
    console.log('se requiere /');
    res.json({
        ok:true
    })
})*/

app.listen( process.env.PORT,() =>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
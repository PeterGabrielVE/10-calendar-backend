const express = require('express');
require('dotenv').config();

const app = express();

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
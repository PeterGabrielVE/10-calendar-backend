const express = require('express');


const app = express();


app.get('/',(req, res)=>{
    console.log('se requiere /');
    res.json({
        ok:true
    })
})

app.listen( 3001,() =>{
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});
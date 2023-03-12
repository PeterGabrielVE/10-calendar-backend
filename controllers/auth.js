const { response } = require('express');


const crearUsuario = (req, res = express.response )=>{

    res.json({
        ok:true,
        msg: 'registro'
    })
}

const loginUsuario = (req, res = express.response )=>{

    res.json({
        ok:true,
        msg: 'login'
    })
}

const revalidarToken = (req, res = express.response )=>{

    res.json({
        ok:true,
        msg: 'revalidar'
    })
}

module.exports ={
    crearUsuario,
    loginUsuario ,
    revalidarToken
}
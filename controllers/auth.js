const { response } = require('express');
const User = require('../models/User');
const crearUsuario = async(req, res = express.response )=>{

    //const { name, email, password } = req.body;
    try{
        const Usuario = new User( req.body );

        await Usuario.save();

        res.status(201).json({
            ok:true,
            msg: 'registro'
        })
    } catch( error ){
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })
    }
    
}

const loginUsuario = (req, res = express.response )=>{

    const { email, password } = req.body;

    res.status(201).json({
        ok:true,
        msg: 'login',
        email,
        password
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
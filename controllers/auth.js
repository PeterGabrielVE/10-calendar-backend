const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const crearUsuario = async(req, res = express.response )=>{

    const { email, password } = req.body;

    try{

        let usuario = await User.findOne({ email });
        
        if( usuario ){
            res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            })
        }
        
        usuario = new User( req.body );

        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        await usuario.save();

        res.status(201).json({
            ok:true,
            uid: usuario._id,
            name: usuario.name,
            msg: 'registro'
        })
    } catch( error ){
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })
    }
    
}

const loginUsuario = async(req, res = express.response )=>{

    const { email, password } = req.body;
    try{

        const usuario = await User.findOne({ email });
        
        if( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'No existe usuario  con ese correo'
            })
        }

        //confirmar los passwords
        const validaPassword = bcrypt.compareSync( password, usuario.password );
        
        if( !validaPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }

        // Generar nuestro JWT

        res.json({
            ok:true,
            uid: usuario.id,
            name: usuario.name
        });
    }catch( error ){
        res.status(500).json({
            ok: false,
            error: error,
            msg: 'Por favor comuniquese con el administrador'
        })
    }
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
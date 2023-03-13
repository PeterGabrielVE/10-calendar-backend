const { response } = require('express');


const crearUsuario = (req, res = express.response )=>{

    const { name, email, password } = req.body;

    if( name.length < 5 ){
        return res.status(400).json({
            ok:false,
            msg:'El nombre debe de ser de 5 letras'
        })
    }
    res.json({
        ok:true,
        msg: 'registro',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res = express.response )=>{

    const { email, password } = req.body;
    console.log( req );
    res.json({
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
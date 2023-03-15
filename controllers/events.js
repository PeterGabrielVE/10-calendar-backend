const { response } = require('express');
const bcrypt = require('bcryptjs');
const Event = require('../models/Event');
const { generarJWT } = require('../helpers/jwt');

const createEvent = async(req, res = express.response )=>{

    try{

        res.json({
            ok:true,
            msg: 'Create Event'
        });
    } catch( error ){
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })
    }
    
}

const getEvent = async(req, res = express.response )=>{


    try{
        res.json({
            ok:true,
            msg: 'Get Event'
        });
    }catch( error ){
        res.status(500).json({
            ok: false,
            error: error,
            msg: 'Por favor comuniquese con el administrador'
        })
    }
}

const updateEvent = async(req, res = express.response )=>{


    try{
        res.json({
            ok:true,
            msg: 'Update Event'
        });
    }catch( error ){
        res.status(500).json({
            ok: false,
            error: error,
            msg: 'Por favor comuniquese con el administrador'
        })
    }
}

const deleteEvent = async(req, res = express.response )=>{


    res.json({
        ok:true,
        msg: 'Delete Event'
    });
}

module.exports ={
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent
}
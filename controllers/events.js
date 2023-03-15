const { response } = require('express');
const Event = require('../models/Event');


const createEvent = async ( req, res = response ) => {

    const event = new Event( req.body );

    try {

        event.user = req.uid;
        
        const eventoGuardado = await event.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const getEvent = async(req, res = express.response )=>{


    try{
        const events = await Event.find()
                                .populate('user','name');

        res.json({
            ok: true,
            events
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
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

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Event.findById( eventoId );

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if ( evento.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Event.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );

        res.json({
            ok: true,
            evento: eventoActualizado
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
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
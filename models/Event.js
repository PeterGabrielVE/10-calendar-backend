const { Schema, model } = require('mongoose');

const EventSchema = Schema({
    name: {
        type:String,
        require: true
    },
    
});

module.exports = model('Evento', EventSchema);
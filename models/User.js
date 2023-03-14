const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    email:{
        type:String,
        require: true
    }
});

module.exports = model('Usuario', UserSchema);
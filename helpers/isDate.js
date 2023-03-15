const moment = require('moment');

const isDate = ( value ) => {

    if ( !value ) {
        return false;
    }
    return true;
    /*const fecha = moment( value );
    if ( fecha.isValid() ) {
        return true;
    } else {
        return false;
    }*/
    
}



module.exports = { isDate };



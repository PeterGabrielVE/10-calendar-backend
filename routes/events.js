const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvent, createEvent, updateEvent, deleteEvent } =  require('../controllers/events');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar_campos');

const router = Router();

router.use( validarJWT );

// obtener eventos
router.get('/', getEvent);

// create eventos
router.post('/createEvent',
[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de finalización es obligatoria').custom( isDate ),
    validarCampos
],createEvent);

// update eventos
router.put('/updateEvent/:id', updateEvent);

// delete eventos
router.put('/deleteEvent/:id', deleteEvent);

module.exports = router;

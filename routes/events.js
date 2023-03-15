const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvent, createEvent, updateEvent, deleteEvent } =  require('../controllers/events');
const router = Router();

router.use( validarJWT );

// obtener eventos
router.get('/', getEvent);

// create eventos
router.post('/createEvent', createEvent);

// update eventos
router.put('/updateEvent/:id', updateEvent);

// delete eventos
router.put('/deleteEvent/:id', deleteEvent);

module.exports = router;

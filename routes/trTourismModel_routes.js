const router = require('express').Router();
var cors = require('cors');
const getControllers = require('../controllers/trTourismModel/get');
const saveControllers = require('../controllers/trTourismModel/save');

router.get('/findAll', getControllers.findAll);
router.get('/findSQL', getControllers.findSQL);

router.post('/save', cors({ origin: true }), saveControllers.createdata);
router.post('/update', cors({ origin: true }), saveControllers.updatedata);

module.exports = router;

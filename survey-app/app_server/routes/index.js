var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.survey);
router.post('/', ctrlMain.submit);
router.get('/about', ctrlMain.about);

module.exports = router;

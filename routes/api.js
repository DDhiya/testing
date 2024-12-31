const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');
const { helloFs } = require('../controllers/exampleController');

router.get('/example', exampleController.getExample);
router.get('/fs', helloFs);

module.exports = router;

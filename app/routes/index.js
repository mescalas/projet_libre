const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const {getAcco, getCompany} = require('../controllers/acco');
// Const { INSEEToken, PISTEToken } = require('../controllers/token');
const {ApiConnect} = require('../utils/apiConnect');

router.use((req, res, next) => {
   
	next();
});

router.get('/', ApiConnect);
router.get('/acco', getAcco);
router.get('/company/:siret', getCompany);
// Router.get('/inseerenewal', INSEEToken);
// router.get('/pisterenewal', PISTEToken);

module.exports = router;

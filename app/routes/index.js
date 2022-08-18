const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const {getAcco, getAccoList, getCompany} = require('../controllers/acco');
// Const { INSEEToken, PISTEToken } = require('../controllers/token');

router.get('/acco/:id', getAcco);
router.get('/accoList&pagination=:paginatio&page=:pageNumber', getAccoList);
router.get('/company/:siret', getCompany);

module.exports = router;

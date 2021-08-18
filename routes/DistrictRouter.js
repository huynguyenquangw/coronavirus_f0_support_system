const router = require('express').Router();
const districtCtrl = require('../controllers/DistrictCtrl');

//Add new district
router.post('/add', districtCtrl.addDistrict);

//Get all district
router.get('/', districtCtrl.getAllDistricts);

module.exports = router;
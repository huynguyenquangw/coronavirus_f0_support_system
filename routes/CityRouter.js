const router = require('express').Router();
const cityCtrl = require('../controllers/CityCtrl');

//Add new city
router.post('/add', cityCtrl.addCity);

//Get all city
router.get('/', cityCtrl.getAllCities);
router.get('/get/:id', cityCtrl.getCityByID);
// router.get('/get/:name', cityCtrl.getCityByName)



//Delete doctor by id
// router.delete('/delete/:id', auth, authAdmin, cityCtrl.deleteDoctorByID)

//Update doctor by id
// router.put('/update/:id', cityCtrl.updateCityDistricts)

module.exports = router;
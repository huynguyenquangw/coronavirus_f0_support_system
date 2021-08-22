const router = require('express').Router();
const medicineFormCtrl = require('../controllers/MedicineFormCtrl');
const authDoctor = require('../middleware/authDoctor')

//Add new 
router.post('/', authDoctor, medicineFormCtrl.addMedicineForm);

//Get all
router.get('/', medicineFormCtrl.getAllMedicineForms);
// router.get('/get/:id', MedicineFormCtrl.getCityByID);
// router.get('/get/:name', MedicineFormCtrl.getCityByName)



//Delete doctor by id
// router.delete('/delete/:id', auth, authAdmin, MedicineFormCtrl.deleteDoctorByID)

//Update doctor by id
// router.put('/update/:id', MedicineFormCtrl.updateCityDistricts)

module.exports = router;
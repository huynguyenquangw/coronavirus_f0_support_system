const router = require('express').Router()
const PharmacyCtrl = require('../controllers/PharmacyCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

//Add a Pharmacy
router.post('/', auth, authAdmin, PharmacyCtrl.add)

//Get Pharmacy by id
router.get('/:id', PharmacyCtrl.getPharmacy)

//Get all Pharmacy
router.get('/', PharmacyCtrl.getAllPharmacy)

//Update Pharmacy by id
router.put('/update/:id', auth, authAdmin, PharmacyCtrl.updatePharmacyByID)

//Delete by Pharmacy id
router.delete('/delete/:id', auth, authAdmin, PharmacyCtrl.deletePharmacyByID)

module.exports = router
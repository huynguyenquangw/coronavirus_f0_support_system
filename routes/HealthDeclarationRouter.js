const router = require('express').Router()
const HealthDeclarationCtrl = require('../controllers/HealthDeclarationCtrl')
const auth = require('../middleware/auth')
<<<<<<< HEAD
const authAdmin = require('../middleware/authAdmin')
=======
const authDoctor = require('../middleware/authDoctor')
>>>>>>> frontend

//Create a health declaration form
router.post('/add', auth, HealthDeclarationCtrl.add)

<<<<<<< HEAD

//Get Health Declaration by id
router.get('/info/:id', auth, HealthDeclarationCtrl.getHealthDeclaration)
=======
//Get Health Declaration for patient
router.get('/user', auth, HealthDeclarationCtrl.getHealthDeclarationForPatient)

//Get Health Declaration for doctor
router.get('/doctor', authDoctor, HealthDeclarationCtrl.getHealthDeclarationForDoctor)
>>>>>>> frontend

//Get all Health declarations
router.get('/', HealthDeclarationCtrl.getAllHealthDeclaration)

//Update Health Declaration by id
<<<<<<< HEAD
router.put('/update/:id', auth, authAdmin,  HealthDeclarationCtrl.updateHealthDeclarationByID)

//Delete by Health Declaration id
router.delete('/delete/:id', auth, authAdmin, HealthDeclarationCtrl.deleteHealthDeclarationByID)
=======
router.put('/update/:id', auth, HealthDeclarationCtrl.updateHealthDeclarationByID)

//Update medicine for health declaration by id
router.put('/update/medicine/:id', authDoctor, HealthDeclarationCtrl.updateMedicineForHealthDeclaration)

//Delete by Health Declaration id
router.delete('/delete/:id', auth, HealthDeclarationCtrl.deleteHealthDeclarationByID)
>>>>>>> frontend

module.exports = router
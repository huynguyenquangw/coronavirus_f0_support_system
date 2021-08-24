const router = require('express').Router()
const HealthDeclarationCtrl = require('../controllers/HealthDeclarationCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

//Create a health declaration form
router.post('/add', auth, HealthDeclarationCtrl.add)


//Get Health Declaration by id
//router.get('/info', auth, HealthDeclarationCtrl.getHealthDeclaration)

//Get all Health declarations
router.get('/', HealthDeclarationCtrl.getAllHealthDeclaration)

//Update Health Declaration by id
router.put('/update/:id', auth, authAdmin,  HealthDeclarationCtrl.updateHealthDeclarationByID)

//Delete by id

module.exports = router
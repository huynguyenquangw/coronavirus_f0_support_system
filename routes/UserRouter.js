const router = require('express').Router()
const userCtrl = require('../controllers/UserCtrl')
const auth = require('../middleware/auth')

//Authentication
router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

//Get info of a patient
router.get('/info', auth, userCtrl.getUser)

//Get all patients
router.get('/', userCtrl.getAllPatient)

//Update patient by id
router.put('/update/:id', auth, userCtrl.updatePatientByID)

module.exports = router
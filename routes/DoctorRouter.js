const router = require('express').Router()
const doctorCtrl = require('../controllers/DoctorCtrl')
const authDoctor = require('../middleware/authDoctor')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

//Authentication and Authorization
router.post('/register', auth, authAdmin, doctorCtrl.register)

router.post('/login', doctorCtrl.login)

router.get('/logout', doctorCtrl.logout)

router.get('/refresh_token', doctorCtrl.refreshToken)

router.get('/info', authDoctor, doctorCtrl.getDoctor)

//Get all doctor
router.get('/', doctorCtrl.getAllDoctor)

//Delete doctor by id
router.delete('/delete/:id', auth, authAdmin, doctorCtrl.deleteDoctorByID)

//Update doctor by id
router.put('/update/:id', authDoctor, doctorCtrl.updateDoctorByID)

module.exports = router
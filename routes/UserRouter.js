<<<<<<< HEAD
const router = require("express").Router();
const userCtrl = require("../controllers/UserCtrl");
const auth = require("../middleware/auth");
=======
<<<<<<< HEAD
const router = require('express').Router()
const userCtrl = require('../controllers/UserCtrl')
const auth = require('../middleware/auth')
>>>>>>> frontend

//Authentication
router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/logout", userCtrl.logout);

router.get("/refresh_token", userCtrl.refreshToken);

//Get info of a patient by token
router.get("/info", auth, userCtrl.getUser);

//Get all patients
router.get("/", userCtrl.getAllPatient);

//Update patient by authorize token
router.put("/update", auth, userCtrl.updatePatientByID);

<<<<<<< HEAD
=======
module.exports = router
=======
const router = require("express").Router();
const userCtrl = require("../controllers/UserCtrl");
const auth = require("../middleware/auth");

//Authentication
router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/logout", userCtrl.logout);

router.get("/refresh_token", userCtrl.refreshToken);

//Get info of a patient by token
router.get("/info", auth, userCtrl.getUser);

//Get all patients
router.get("/", userCtrl.getAllPatient);

//Update patient by authorize token
router.put("/update", auth, userCtrl.updatePatientByID);

>>>>>>> frontend
//Update patient password by authorize token
router.put("/updatepw", auth, userCtrl.updateUserPasswordByID);

module.exports = router;
<<<<<<< HEAD
=======
>>>>>>> loadoutnguyen
>>>>>>> frontend

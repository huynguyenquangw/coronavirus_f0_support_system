const router = require("express").Router();
const medicineFormCtrl = require("../controllers/MedicineFormCtrl");
const authDoctor = require("../middleware/authDoctor");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

//Add new
router.post("/", authDoctor, medicineFormCtrl.addMedicineForm);

//Get all
router.get("/", authDoctor, medicineFormCtrl.getAllMedicineForms);

// Delete form by id
router.delete(
  "/delete/:id",
  authDoctor,
  medicineFormCtrl.deleteMedicineFormByID,
);

// Update form by id
router.put("/update/:id", authDoctor, medicineFormCtrl.updateMedicineFormByID);

module.exports = router;

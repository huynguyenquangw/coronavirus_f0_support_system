const MedicineForms = require("../models/MedicineFormModel");
const Users = require("../models/UserModel");
const Doctors = require("../models/DoctorModel");

const MedicineFormCtrl = {
  /**
   * Create medicine form
   */
  addMedicineForm: async (req, res) => {
    try {
      const { user_id, doctor_id, diagnostic, prescriptions, note } = req.body;

      // check valid user
      const validUser = await Users.findOne({ _id: user_id })
        .select("_id")
        .lean();
      if (!validUser) return res.status(400).json({ msg: "Wrong user!" });

      // check valid doctor
      const validDoctor = await Doctors.findOne({ _id: doctor_id })
        .select("_id")
        .lean();
      // const validDoctor = await Doctors.findById(req.doctor.id)
      if (!validDoctor) return res.status(400).json({ msg: "Wrong doctor!" });

      const form = await MedicineForms.create({
        user_id,
        doctor_id,
        // doctor_id: req.doctor.id,
        diagnostic,
        prescriptions,
        note,
      });

      res.json({
        status: "Form was successfully created!",
        data: form,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  /**
   * Get all district
   */
  getAllMedicineForms: async (req, res) => {
    try {
      const forms = await MedicineForms.find().populate({path: "prescriptions", select: "-_id -__v", populate: {path: "medicine", select: "-_id -__v"}});
      if (!forms) return res.status(400).json({ msg: "NOT found!" });

      res.json(forms);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  /**
   * Delete medicine form by ID
   */
  deleteMedicineFormByID: async (req, res) => {
    try {
      await MedicineForms.findByIdAndDelete(req.params.id);
      res.json({ msg: `District ${req.params.id} has been deleted.` });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  /**
   * Update medicine form by ID
   */
  updateMedicineFormByID: async (req, res) => {
    try {
      const { prescriptions, note } = req.body;

      await MedicineForms.findOneAndUpdate(
        { _id: req.params.id },
        {
          prescriptions,
          note,
        },
      );

      res.json({ msg: `Form has been updated!` });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = MedicineFormCtrl;

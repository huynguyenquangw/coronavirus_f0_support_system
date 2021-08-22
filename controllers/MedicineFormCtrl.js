const MedicineForms = require('../models/MedicineFormModel');
const Users = require('../models/UserModel');
const Doctors = require('../models/DoctorModel');

const MedicineFormCtrl = {
    /**
     * Add 1 medicine form
     */
    addMedicineForm: async (req, res) => {
        try {
            const {user_id, doctor_id, description, details, note} = req.body;
            
            // check valid user
            const validUser = await Users.findOne({ _id: user_id}).select("_id").lean();
            if (!validUser) return res.status(400).json({ msg: "Wrong user!" })

            // check valid doctor
            const validDoctor = await Doctors.findOne({ _id: doctor_id}).select("_id").lean();
            if (!validDoctor) return res.status(400).json({ msg: "Wrong doctor!" })

            const form = await MedicineForms.create({user_id, doctor_id, description, details, note})
            
            res.json(form);
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    /**
     * Get all medicine form
     */
    getAllMedicineForms: async (req, res) => {
        try {
            const forms = await MedicineForms.find()
            if (!forms) return res.status(400).json({ msg: "NOT found!" })

            res.json(forms)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
}

module.exports = MedicineFormCtrl;
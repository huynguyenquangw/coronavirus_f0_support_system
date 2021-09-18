const Medicines = require("../models/MedicineModel");

const MedicineCtrl = {
  /**
   * Create new medicine
   */
  addMedicine: async (req, res) => {
    try {
      const { name, type, link } = req.body;

      const medicineName = await Medicines.findOne({ name });
      if (medicineName)
        return res
          .status(400)
          .json({ msg: "The medicine name is already existed!" });

<<<<<<< HEAD
      const medicine = await Medicines.create({
        name,
        type,
        link
      });

      res.json({
        msg: `Medicine ${name} has successfully created!`,
        type,
      });
    } catch (error) {
      console.log(error);
=======
      const medicine = new Medicines({
        name, type, link
      })

      await medicine.save()

      res.json({
        msg: `Medicine ${name} has successfully created!`,
        medicine,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
>>>>>>> frontend
    }
  },

  /**
   * Get all medicines
   */
  getAllMedicines: async (req, res) => {
    try {
      const medicines = await Medicines.find();
      if (!medicines) return res.status(400).json({ msg: "NOT found!" });

      res.json(medicines);
<<<<<<< HEAD
    } catch (e) {
      console.log(e);
=======
    } catch (error) {
      return res.status(500).json({ msg: error.message });
>>>>>>> frontend
    }
  },

  /**
   * Delete city by ID
   */
  deleteMedicineByID: async (req, res) => {
    try {
      await Medicines.findByIdAndDelete(req.params.id);
      res.json({ msg: `City ${req.params.id} has been deleted.` });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = MedicineCtrl;

const mongoose = require('mongoose');
const Districts = require('../models/DistrictModel');

const DistrictCtrl = {
    addDistrict: async (req, res) => {
        try {
            const {name, abbreviation, postcode, city} = req.body;
            const district = await Districts.create({name, abbreviation, postcode, city})

            res.json(district);
        } catch (error) {
            console.log(error);
        }
    },

    /**
     * Get all district
     */
    getAllDistricts: async (req, res) => {
        try {
            const districts = await Districts.find().populate({path: "city"})
            if (!districts) return res.status(400).json({ msg: "NOT found!" })

            res.json(districts)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
}

module.exports = DistrictCtrl;
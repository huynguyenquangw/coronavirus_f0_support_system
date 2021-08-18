const Cities = require('../models/CityModel');
const Districts = require('../models/DistrictModel');
const mongoose = require('mongoose');

const DistrictCtrl = {
    addDistrict: async (req, res) => {
        try {
            const { cityID, name} = req.body

            const district = await Districts.findOne({ name })
            if (district) return res.status(400).json({ msg: "The district name is already existed!" })
            
            const city = await Cities.findById(cityID)
            if (!city) return res.status(400).json({ msg: "City does not exist." })

            // res.json(city);
            
            // Story.findOne({_id: cityID}).populate('city', 'name age').exec(function(err, story) {
            //     console.log('Story title: ', story.title);
            //     console.log('Story creator', story.person.name);
            // });
            
            // return res.status(400).json({ msg: `OK + ${city.name}` })

            const newDistrict = new Districts({
                name,
                city: city._id
            })

            //Save to MongoDB
            await newDistrict.save()

            res.json({
                msg: `Successfully created district ${name}.`,
                name
            })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    /**
     * Get all district
     */
    getAllDistricts: async (req, res) => {
        try {
            const districts = await Districts.find()
            if (!districts) return res.status(400).json({ msg: "NOT found!" })

            res.json(districts)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
}

module.exports = DistrictCtrl;
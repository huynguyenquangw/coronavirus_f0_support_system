const Cities = require('../models/CityModel');

const CityCtrl = {
    addCity: async (req, res) => {
        try {
            const { name, abbreviation, postcode } = req.body

            const cityName = await Cities.findOne({ name })
            if (cityName) return res.status(400).json({ msg: "The city name is already existed!" })

            const cityAbr = await Cities.findOne({ abbreviation })
            if (cityAbr) return res.status(400).json({ msg: "The city abbreviation is already used!" })

            const cityCode = await Cities.findOne({ postcode })
            if (cityCode) return res.status(400).json({ msg: "The city postcode is already used!" })

            const newCity = new Cities({
                name,
                abbreviation,
                postcode
            })
            // const newCity = await Cities.create(
            //     { name, abbreviation, postcode }
            // )

            //Save to MongoDB
            await newCity.save()

            res.json({
                msg: `The city named ${name} has been successfully created.`,
                abbreviation,
                postcode
            })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getAllCities: async (req, res) => {
        try {
            const cities = await Cities.find()
            if (!cities) return res.status(400).json({ msg: "NOT found!" })

            res.json(cities)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getCityByID: async (req, res) => {
        try {
            const city = await Cities.findById(req.params.id).populate('district')
            if (!city) return res.status(400).json({ msg: `The city ${req.params.id} does not exist!` })

            res.json(city)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
}

module.exports = CityCtrl;
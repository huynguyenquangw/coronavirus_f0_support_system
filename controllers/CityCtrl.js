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
            const city = await Cities.findById(req.city.id)
            if (!city) return res.status(400).json({ msg: `The city ${req.city.id} does not exist!` })

            res.json(city)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    // getCityByName: async (req, res) => {
    //     try {
    //         const city = await Cities.findByName(req.city.name)
    //         if (!city) return res.status(400).json({ msg: `The city named ${req.city.name} does not exist!` })

    //         res.json(city)
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message })
    //     }
    // },
    // deleteCityByID: async (req, res) => {
    //     try {
    //         await Cities.findByIdAndDelete(req.params.id)
    //         res.json({ msg: `City ${req.params.id} has been deleted.` })
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message })
    //     }
    // },
    // deleteCityByName: async (req, res) => {
    //     try {
    //         await Cities.findByNameAndDelete(req.params.name)
    //         res.json({ msg: `City ${req.params.name} has been deleted.` })
    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message })
    //     }
    // },
    updateCityDistricts: async (req, res) => {
        try {
            const { district } = req.body;
            // const city = await Cities.findById(req.city.id)
            // if (!city) return res.status(400).json({ msg: `The city ${req.city.cityID} does not exist!` })

            // await Cities.findByIdAndUpdate(
            //     cityID,
            //     {
            //         $push: {
            //             districts: {
            //                 name: district.name
            //             }
            //         }
            //     },
            //     {new: true, useFindAndModify: false}
            // )

            await Cities.findOneAndUpdate({ id: req.params.id }, {
                $push: {
                    districts: {
                        name: district.name
                    }
                }
            }
            )

            res.json({ msg: `Information of city ${_id} has been updated.` })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
    // updateCityByID: async (req, res) => {
    //     try {
    //         const { name, abbreviation, postcode, } = req.body

    //         const cityName = await Cities.findOne({ name })
    //         if (cityName) return res.status(400).json({ msg: "The city name is already existed." })
    //         const cityAbr = await Cities.findOne({ abbreviation })
    //         if (cityAbr) return res.status(400).json({ msg: "The city abbreviation is already used." })
    //         const cityCode = await Cities.findOne({ postcode })
    //         if (cityCode) return res.status(400).json({ msg: "The city postcode is already used." })

    //         await Cities.findOneAndUpdate(
    //             { 
    //                 _id: req.params.id 
    //             }, {
    //                 name,
    //                 email,
    //                 password: passwordHash,
    //                 district,
    //                 city,
    //                 phone,
    //                 certificate,
    //                 experience
    //             }, {
    //                 $push: {
    //                     districts: {
    //                         name: district.name,
    //                     }
    //             }
    //         })

    //         res.json({ msg: `Information of city ${id} has been updated.` })



    //     } catch (error) {
    //         return res.status(500).json({ msg: error.message })
    //     }
    // }
}

module.exports = CityCtrl;
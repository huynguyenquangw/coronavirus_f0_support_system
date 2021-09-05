const Pharmacy = require('../models/PharmacyModel')

//Search, filter, sort and paginate
class APIfeatures {
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }

    filter() {
        const queryObj = { ...this.queryString } // = req.query

        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(ex => delete (queryObj[ex]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        this.query.find(JSON.parse(queryStr))
        return this
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')

            this.query = this.query.sort(sortBy)
        }
        else {
            this.query = this.query.sort('-createdAt')
        }

        return this
    }

    paginate() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 1
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}

const PharmacyCtrl = {

    // Add a pharmacy
    add: async (req, res) => {

        try {
            const { brand, district, image } = req.body

            const newPharmacy = new Pharmacy({
                brand,
                district,
                image
            })

            //Save to MongoDB
            await newPharmacy.save()

            res.json({
                msg: `Pharmacy has been added!`,
            })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    // Get all Pharmacy
    getAllPharmacy: async (req, res) => {
        try {
            const features = new APIfeatures(Pharmacy.find().populate({
                path: "district",
                select: "-createdAt -updatedAt -__v",
                populate: {
                    path: "city",
                    select: "-createdAt -updatedAt -__v",
                },
            }), req.query).filter().sort().paginate()

            const pharmacies = await features.query

            res.json({
                status: 'Success',
                results: pharmacies.length,
                data: pharmacies
            })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    // Update Pharmacy by ID
    updatePharmacyByID: async (req, res) => {
        try {
            const { brand, district, availability, image } = req.body

            await Pharmacy.findByIdAndUpdate({ _id: req.params.id }, {
                brand, district, availability, image
            })

            res.json({ msg: `Pharmacy at Brand:${brand} , has been updated!` })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    // Get a Pharmacy by ID
    getPharmacy: async (req, res) => {
        try {
            // const healthdeclaration = await HealthDeclaration.findById(req.healthdeclaration.id)
            const pharmacy = await Pharmacy.findById(req.params.id).populate({
                path: "district",
                select: "-createdAt -updatedAt -__v",
                populate: {
                    path: "city",
                    select: "-createdAt -updatedAt -__v",
                },
            });
            if (!pharmacy) return res.status(400).json({ msg: 'Pharmacy does not exist.' })

            res.json(pharmacy)

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    //Delete by ID
    deletePharmacyByID: async (req, res) => {
        try {
            await Pharmacy.findByIdAndDelete(req.params.id)
            res.json({ msg: `Pharmacy ${req.params.id} has been deleted.` })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}
module.exports = PharmacyCtrl
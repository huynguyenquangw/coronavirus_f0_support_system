const mongoose = require('mongoose')

const DistrictSchema = mongoose.Schema({
    name: {
        type: String,
    },
    timestamps: true
})

module.exports = mongoose.model("District", DistrictSchema)
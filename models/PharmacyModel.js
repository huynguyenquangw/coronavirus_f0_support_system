const mongoose = require('mongoose')

const PharmacySchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Districts",
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    image: {
        type: Object,
        require: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("Pharmacy", PharmacySchema)
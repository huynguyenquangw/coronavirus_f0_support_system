const mongoose = require('mongoose');

const CitySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        abbreviation: {
            type: String,
            required: true,
            unique: true
        },
        postcode: {
            type: String,
            required: true,
            unique: true
        },
        districts : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Districts' }]
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Cities", CitySchema)
const mongoose = require("mongoose");

const MedicineSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        link: {
            type: String,
            unique: true,
        },
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model("Medicines", MedicineSchema);

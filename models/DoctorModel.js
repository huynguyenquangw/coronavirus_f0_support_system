const mongoose = require('mongoose')

const DoctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 2
    },
    district: {
<<<<<<< HEAD
        type: String,
        trim: true,
        default: ''
    },
    city: {
        type: String,
        trim: true,
        default: ''
=======
        type: mongoose.Schema.Types.ObjectId,
        ref: "Districts",
>>>>>>> loadoutnguyen
    },
    phone: {
        type: String,
        trim: true,
        default: ''
    },
    certificate: {
<<<<<<< HEAD
        type: Object,
        trim: true,
        default: {}
=======
        type: Object
>>>>>>> loadoutnguyen
    },
    experience: {
        type: String,
        default: ''
<<<<<<< HEAD
=======
    },
    img: {
        type: Object
>>>>>>> loadoutnguyen
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Doctors", DoctorSchema)
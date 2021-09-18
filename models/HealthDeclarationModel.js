const mongoose = require('mongoose')

const HealthDeclarationSchema = mongoose.Schema({
    user_id: {
<<<<<<< HEAD
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required: true,
       
    },
    doctor_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctors', 
        required: true,
        
=======
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctors',
        required: true,
    },
    medicineform_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicineForms',
>>>>>>> frontend
    },
    fever: {
        type: Boolean,
        required: true,
<<<<<<< HEAD
       
=======

>>>>>>> frontend
    },
    cough: {
        type: Boolean,
        required: true,
<<<<<<< HEAD
      
=======

>>>>>>> frontend
    },
    breathing: {
        type: Boolean,
        required: true
    },
<<<<<<< HEAD

    sorethroat: {
        type: Boolean,
        required: true
      
    },

    phlegm: {
        type: Boolean,
        required: true
       
=======
    sorethroat: {
        type: Boolean,
        required: true

    },
    phlegm: {
        type: Boolean,
        required: true

>>>>>>> frontend
    },
    runnynose: {
        type: Boolean,
        required: true
<<<<<<< HEAD
       
=======

>>>>>>> frontend
    },
    tiredness: {
        type: Boolean,
        required: true
    },
    blocknose: {
        type: Boolean,
        required: true
    },
    losssmell: {
        type: Boolean,
        required: true
    },
    musclepain: {
        type: Boolean,
        required: true
    },
    vaccinated: {
        type: Boolean,
        required: true
    },
    covid: {
        type: Boolean,
        required: true
    },
<<<<<<< HEAD

    othersymptoms: {
        type: String,
        default: ''
=======
    othersymptoms: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: false
>>>>>>> frontend
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("HealthDeclaration", HealthDeclarationSchema)
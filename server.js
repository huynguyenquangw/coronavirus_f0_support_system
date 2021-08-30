require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//Routes
app.use('/user', require('./routes/UserRouter'))
app.use('/doctor', require('./routes/DoctorRouter'))
app.use('/api', require('./routes/UploadToCloudinary')) //Cloudinary
app.use('/city', require('./routes/CityRouter'))
app.use('/district', require('./routes/DistrictRouter'))
app.use('/form', require('./routes/MedicineFormRouter'))
app.use('/medicine', require('./routes/MedicineRouter'))
app.use('/health', require('./routes/HealthDeclarationRouter'))
app.use('/pharmacy', require('./routes/PharmacyRouter'))


//connect to mongoDB
const URL = process.env.MONGO_URL
mongoose.connect(URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB.');
})

app.get('/', (req, res) => {
    res.json({ msg: "ON AIR!!!" })
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is running on', PORT);
})

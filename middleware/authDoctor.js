const jwt = require("jsonwebtoken")

const authDoctor = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if (!token) return res.status(400).json({ msg: "Invalid Authentication" })

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, doctor) => {
            if (err) return res.status(400).json({ msg: "Invalid Authentication" })

            req.doctor = doctor
            next()
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

module.exports = authDoctor
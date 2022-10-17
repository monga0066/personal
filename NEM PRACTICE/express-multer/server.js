const express = require('express')

const app = express()
const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("avatar")

app.get("/", (req, res) => {
    res.send("<h1>Welcome To Home</h1>")
})

app.post("/profile", upload, (req, res) => {
    res.send("Uploaded")
})

app.listen(8080)
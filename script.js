require("dotenv").config
const multer = require("multer")

const express = require("express")
const app = express()
app.use(express.static(__dirname));

const upload = multer({ dest: "Uploaded_files" })

app.set("view engine", "ejs")

/*
app.get("/views/homepage.ejs", (req, res) => {
    res.sender("/views/homepage.ejs")
})
*/

app.get("/", (req, res) => {
    res.render("homepage")
})

app.post("/upload", upload.single("file"), (req, res) => {
    res.send("hi")
})



app.listen(8000)
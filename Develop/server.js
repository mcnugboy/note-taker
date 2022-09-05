const express = require ("express");
const fs = require ("fs");
const path = require ("path");
const database = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//setup routes

//extension '/' takes you to the index.html & /notes will take you to the notes saved page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", function (req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
// app.route("/api/notes")
//     .get(function (req, res){
//         res.json(database);
//     })
//     .post(function (req, res){
//         var newFile = req.body;
//         var ids = 100
//         var paths = path.join(__dirname, "")
//     })


app.listen(PORT, () => {
    console.log(`Server live on ${ PORT } !`)
});
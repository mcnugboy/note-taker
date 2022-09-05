const express = require ("express");
const fs = require ("fs");
const path = require ("path");
const database = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3000


//setup routes

//extension '/' takes you to the index.html & /notes will take you to the notes saved page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", function (req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server live on ${ PORT } !`)
});
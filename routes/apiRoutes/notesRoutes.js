const router = require("express").Router();
const fs = require("fs");
const {
    createNewNote,
    validateNote,
} = require("../../lib/notes");
const { notes } = require("../../db/db.json");

router.get("/api/notes", (req, res) => {
    fs.readFile("../../db/db.json", (err, data) => {
        if(err) {
            res.sendStatus(404);
        } else {
            console.log(data);
            res.json(notes);
        }
    })
})

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send("The note is not properly formatted.");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
})



module.exports = router;
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const {
    createNewNote,
    validateNote,
    findById,
} = require("../../lib/notes");
const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.get("/notes/:id", (req, res) => {
    const result = findById(req.params.id, notes);
    if(result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send("The note is not properly formatted.");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete("/notes/:id", (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === req.params.id) {
            notes.splice(i, 1);
        }
    }
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(notes);
})


module.exports = router;
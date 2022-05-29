const fs = require("fs");
const path = require("path");

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
    return note;
}

function validateNote(noteArray) {
    if(!noteArray.title) {
        return false;
    }
}

module.exports = {
    createNewNote,
    validateNote
};
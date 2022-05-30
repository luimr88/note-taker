const fs = require("fs");
const path = require("path");
const notes = require("../db/db.json")

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
    return note;
}

function findById(id, noteArray) {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
}

function validateNote(noteArray) {
    if(!noteArray.title) {
        return false;
    }
    return true;
}

module.exports = {
    createNewNote,
    validateNote,
    findById,
};
const fs = require("fs");
const path = require("path");

// Creates a new note saves it to the json file
function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
    return note;
}

/* Receives an id number from the url bar(api/notes/:id) and filters through the json file to
find the note the corresponds with the id number */
function findById(id, noteArray) {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
}

// Validates that when trying to add a note via Insomnia that the proper fields have inputs
function validateNote(noteArray) {
    if(!noteArray.title || !noteArray.text) {
        return false;
    }
    return true;
}

module.exports = {
    createNewNote,
    validateNote,
    findById,
};
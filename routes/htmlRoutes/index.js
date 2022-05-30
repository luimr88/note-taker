const path = require("path");
const router = require("express").Router();

// file path for index.html when "/" is in the address bar
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
})

// File path for notes.html when "/notes" is in the address bar
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
})

// // file path for index.html when "*" is in the address bar
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
})

module.exports = router;
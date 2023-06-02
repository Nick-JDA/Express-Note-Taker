const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const {
    readFromFile,
    readAndAppend,
} = require('../helpers/fsUtils');

// GET Route for retreiving the notes added by users
notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for new notes
notes.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚗`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;

const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
} = require('../helpers/fsUtils');

// GET Route for retreiving the notes added by users
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for specific notes added
notes.get('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_id === noteId);
            return result.length > 0
            ? res.json(result)
            : res.json('No notes with this ID');
        });
});

// POST Route for new notes
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚗`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;

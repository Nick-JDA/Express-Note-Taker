const path = require('path');
const notesRouter = require('express').Router();


//GET Route for homepage
notesRouter.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

//GET Route for notes
notesRouter.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = notesRouter;

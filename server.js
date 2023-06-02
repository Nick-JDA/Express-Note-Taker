const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
//const api = require('./routes/index');
const notes = require('./routes/notes');
const html = require('./routes/html');

const PORT = process.env.PORT || 3001;

const app = express();

// Imports in the custom middleware called "clog"
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', html);
app.use('/api', notes);

//Wildcard route to direct users back to main page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚗`)
});

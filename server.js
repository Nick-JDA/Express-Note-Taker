const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();

//GET Route for homepage
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET Route for notes
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//Wildcard route to direct users back to main page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚗`)
})
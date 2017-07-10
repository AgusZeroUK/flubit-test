const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const port = 3000


// Get our API routes
const api = require('./server/routes/api');



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'dist')));



// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.use((req, res, next) => {
    res.status(404).json({ error: 'Not found!' })
})

app.listen(port, () => {
    console.log('Server listening on http://localhost:3000!')
})
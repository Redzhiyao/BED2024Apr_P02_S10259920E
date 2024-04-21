const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/', (req, res) => {
    res.send('Got a DELETE request at /user')
})
const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

app.use(express.static(__dirname + '/dist/ng-marvel'));

app.get('/xpto', (req, res) => {
    res.response(API_KEY);
});


app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/ng-marvel/index.html');
});

app.listen(PORT, () => {
    console.log(API_KEY);
    console.log(API_URL);
    console.log(`Server listening on port ${PORT}`);
})
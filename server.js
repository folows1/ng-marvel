const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/ng-marvel'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/ng-marvel/index.html');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
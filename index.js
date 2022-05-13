const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('My first Heroku app!');
})
app.post('/test', (req, res) => {
    const output = { return_string: "test string!" };
    res.send(JSON.stringify(output));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

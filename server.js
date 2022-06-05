const { response } = require('express');
const express = require('express');
const cors = reqire('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

const rappers = {
    '21 savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England',
    },
    'chance the rapper': {
        age: 29,
        birthName: 'Chancelor Bennett',
        birthLocation: 'Chicago, Illinois',
    },
    'dylan': {
        age: 29,
        birthName: 'Dylan',
        birthLocation: 'Dylan',
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/main.js', (req, res) => {
    res.sendFile(__dirname + '/main.js');
});

app.get('/api/:rapperName', (req, res) => {
    if (rappers[req.params.rapperName.toLowerCase()]) {
        res.json(rappers[req.params.rapperName.toLowerCase()]);
    } else {
        res.json(rappers['dylan']);
    }
})
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}, and Leon is funny and awesome`);
});

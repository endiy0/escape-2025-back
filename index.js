
var express = require("express");
const app = express();

app.use(express.json());

var port = 3000;

var status = false;

app.get('/', (req, res) => {
    res.send(`<html><head><title>escape</title></head><body><h1>${status ? 'on' : 'off'}</h1><button onClick="fetch(\'/toggle\').then(() => location.reload())">Toggle</button></body></html>`);
});

app.get('/status', (req, res) => {
    if (status) {
        res.json({ status: 'on' });
    } else {
        res.json({ status: 'off' });
    }
});

app.get('/toggle', (req, res) => {
    status = !status;
    res.json({ status: status ? 'on' : 'off' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const express = require('express');
const {json} = require('body-parser');
const port = 3003;
const mc = require('./controllers/message_controller');

const app = express();

app.use(json());
app.use( express.static(__dirname + '/../public/build'));

const URL = "/api/messages";

app.post(URL,mc.create);

app.get(URL, mc.read);

app.put(`${URL}`, mc.update);

app.delete(`${URL}/:id`, mc.delete);

app.listen( port, () => { console.log(`Server listening on port ${port}`) ;});
const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors")

const app =express();
app.use(bodyParser.json());
app.use(cors());

app.post('/event', async (req, res) => {
    const event = req.body;
    //await axios.post("http://localhost:5O00/event", event).catch(e => console.log(e));
    await axios.post("http://localhost:5100/event", event).catch(e => console.log(e));
    await axios.post("http://localhost:5200/event", event).catch(e => console.log(e));
    await axios.post("http://localhost:5400/event", event).catch(e => console.log(e));

    res.send({status: "ok"})
});



app.listen(5300, () => console.log("event service running on port 5300"))
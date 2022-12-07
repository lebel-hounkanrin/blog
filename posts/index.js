const bodyParser = require("body-parser")
const express = require("express");
const {randomBytes} = require("crypto")
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors())


posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
})

app.post("/posts", async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {id, title};
    await axios.post('http://localhost:5300/event', {
        type: "PostCreated",
        data: {
            id, title
        }
    })
    res.status(201).send(posts[id]);
})

app.post("/event", (req, res) => {
    console.log(req.body.type);
    res.send({})
})



app.listen(5000, ()=> console.log("post service running on port 5000"))
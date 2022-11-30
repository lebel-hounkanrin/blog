const bodyParser = require("body-parser")
const express = require("express");
const {randomBytes} = require("crypto")
const cors = require("cors")

const app = express();
app.use(bodyParser.json());
app.use(cors())


posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
})

app.post("/posts", (req, res) => {
    const id = randomBytes(4).toString('hex');
    console.log(req.body)
    const { title } = req.body;
    posts[id] = {id, title};
    res.status(201).send(posts[id]);
})




app.listen(5200, ()=> console.log("post service running on port 5200"))
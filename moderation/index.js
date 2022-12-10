const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());


app.post("/event", async (req, res) => {
    const {type, data} = req.body;

    if(type == "CommentCreated"){
        const status = data.content.includes('orange') ? "rejected": "approved";

        await axios.post("http://localhost:5300/event", {
            type: "CommentModerated",
            data:  {
                id: data.id,
                postId: data.postId, 
                status, 
                content: data.content
            }
        })
    }
    res.send({})
})

app.listen(5400, () => console.log("Moderation service listening on port 5400"))
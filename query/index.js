const express = require("express")
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors")

const app = express();


app.use(bodyParser.json());
app.use(cors())

const posts = {}
/*posts = {
    "jdef2":{
        "id": "jdef2",
        title: "Hello devs",
        comments: [
            {
                id: "k1is3",
                content: "Ooh you're welcome"
            },
            {
                id: "zpoI7",
                content: "Beautifull days to code again"
            }
        ]
    }
}*/
app.get("/posts", (req, res) => {
    res.send(posts)
})

app.post("/event", (req, res) => {
    const {type, data} = req.body;
    if(type === "PostCreated"){
        const {id, title} = data;
        posts[id] = {id, title, comments: []}
    }
    if(type === "CommentCreated"){
        const {id, content, postId, status} = data
        posts[postId].comments.push({id, content, status})
    }
    if(type === "CommentUpdated"){
        const {postId, id, status, content} = data;
        const post = posts[postId];
        const comment = post.comments.find(post => post.id == id);
        comment.status = status;
        comment.content = content;
    }
    console.log(posts)
    res.send({})
})

app.listen(5200, () => console.log("Query service listening on 5200"))
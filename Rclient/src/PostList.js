import React, {useState, useEffect} from "react";
import axios from 'axios';
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";


export default () => {
    const [posts, setPosts] = useState({});
    const getPosts = async () => {
        const res = await axios.get("http://localhost:5200/posts");
        setPosts(res.data)
    };

    useEffect(() => {
        getPosts();
    }, []);
    const renderedPost = Object.values(posts).map(post => {
        return (
            <div className="card" style={{width:"30%", marginBottom: "20px"}} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        )
    })
    return <div className="d-flex d-row flex-wrap justify-content-between">
        {renderedPost}
    </div>
}
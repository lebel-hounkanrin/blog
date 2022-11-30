import React, {useState, useEffect} from "react";
import axios from "axios"

export default ({postId}) => {
    const [comments, setComment] = useState([]);
    const getComments = async() => {
        const res = await axios.get(`http://localhost:5100/posts/${postId}/comments`);
        setComment(res.data)
    }
    useEffect(() => {
        getComments()
    }, []);
    const renderedComment = Object.values(comments).map(comment => {
        return <p>{comment.content}</p>
    })
    return (
        <div>{renderedComment}</div>
    )
}
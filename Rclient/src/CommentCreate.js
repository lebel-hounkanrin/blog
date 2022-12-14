import React, {useState} from "react";
import axios from "axios"

export default ({postId}) => {
    const [content, setContent] = useState('');
    const onSubmit = (event)=> {
        event.preventDefault();
        axios.post(`http://localhost:5100/posts/${postId}/comments`, {content});
        setContent("")
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-goup">
                    <label>New Comment</label>
                    <input value={content} onChange ={e => setContent(e.target.value)} className="form-control"></input>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
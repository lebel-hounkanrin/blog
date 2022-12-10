
export default ({comments}) => {
    const renderedComment = Object.values(comments).map(comment => {
        let content;
        if (comment.status === "approved") content = comment.content;
        if(comment.status ==="rejected") content = "This comment has been rejected";
        if(comment.status === "pending") content = "This comment is awaiting moderation"
        return <p>{content}</p>
    })
    return (
        <div>{renderedComment}</div>
    )
}
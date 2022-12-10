
export default ({comments}) => {
    const renderedComment = Object.values(comments).map(comment => {
        return <p>{comment.content}</p>
    })
    return (
        <div>{renderedComment}</div>
    )
}
function MovieList(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.rating}</td>
            <td>{props.awards}</td>
            <td>{props.length}</td>
        </tr>
    )
}
export default MovieList;
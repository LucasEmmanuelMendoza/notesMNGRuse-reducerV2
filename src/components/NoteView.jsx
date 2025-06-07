export const NoteView = ({ note }) => {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
        </div>
    )
}
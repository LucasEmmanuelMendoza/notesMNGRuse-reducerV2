export const NoteView = ({ note }) => {
  return (
    <div className="d-flex flex-column ">
      <h2>{note.title}</h2>
      <p>{note.text}</p>
    </div>
  );
};

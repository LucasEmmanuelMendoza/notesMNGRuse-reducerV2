import { Note } from "./Note.jsx";

export const NotesContainer = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} title={note.title} text={note.text} />
      ))}
    </div>
  );
};

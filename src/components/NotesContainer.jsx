import { Note } from "./Note.jsx";

export const NotesContainer = ({ notes }) => {
  return (
    <div>
      {notes ? (
        notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

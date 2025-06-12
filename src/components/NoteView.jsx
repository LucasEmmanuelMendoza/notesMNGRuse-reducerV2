import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export const NoteView = ({ id }) => {
  const { state } = useContext(NotesContext);
  const foundNote = state.notes.find((note) => note.id === id);
  return (
    <div className="d-flex flex-column ">
      <h2>{foundNote.title}</h2>
      <p>{foundNote.text}</p>
    </div>
  );
};

import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export const InputNote = () => {
  const [state, dispatch] = useContext(NotesContext);

  return (
    <div>
      <input name="inputTitle" placeholder="Write a Title"></input>
      <textarea name="inputText" placeholder="Write a Note"></textarea>
    </div>
  );
};

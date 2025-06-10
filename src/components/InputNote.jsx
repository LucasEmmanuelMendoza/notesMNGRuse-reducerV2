import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { Row, Col } from "react-bootstrap";
import { Button } from "./Button";
export const InputNote = () => {
  const { state, dispatch } = useContext(NotesContext);
  return (
    <div>
      <div>
        <input name="inputTitle" placeholder="Write a Title"></input>
        <textarea name="inputText" placeholder="Write a Note"></textarea>
      </div>
      <div>
        <Button className="btn btn-success" content="Add Note" />
      </div>
    </div>
  );
};

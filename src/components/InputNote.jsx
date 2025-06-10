import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { Row, Col } from "react-bootstrap";
import { Button } from "./Button";
export const InputNote = () => {
  const { state, dispatch } = useContext(NotesContext);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <div className="d-flex flex-column gap-1 ms-2">
        <input
          type="text"
          value={state.inputTitle}
          name="inputTitle"
          placeholder="Write a Title"
          onChange={handleChange}
        ></input>
        <textarea
          type="text"
          value={state.inputText}
          name="inputText"
          placeholder="Write a Note"
          onChange={handleChange}
        ></textarea>
      </div>
      {state.idEditingNote != null ? (
        <div>
          <Button
            className="btn btn-success"
            content="Save Note"
            handleClick={() => {
              dispatch({ type: "SAVE_NOTE" });
            }}
          />
        </div>
      ) : (
        <div>
          <Button
            className="btn btn-success"
            content="Add Note"
            handleClick={() => {
              dispatch({ type: "ADD_NOTE" });
            }}
          />
        </div>
      )}
    </div>
  );
};

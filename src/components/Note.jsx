import { useContext, useState } from "react";
import { Button } from "./Button";
import { NotesContext } from "../context/NotesContext";

export const Note = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { state, dispatch } = useContext(NotesContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_NOTE",
      value: props.id,
    });
  };

  const handleEdit = () => {
    dispatch({
      type: "SET_EDIT_NOTE",
      value: props.id,
    });
  };

  return (
    <div
      className="note p-3 m-1 d-flex justify-content-between border border-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="d-flex">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>

      {isHovered ? (
        <div className="">
          <Button
            content="✏️"
            className="btn btn-warning"
            handleClick={handleEdit}
          />
          <Button
            content="❌"
            className="btn btn-danger"
            handleClick={handleDelete}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

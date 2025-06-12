import { Col, Container, Row } from "react-bootstrap";
import { NotesContainer } from "./NotesContainer.jsx";
import { InputNote } from "./InputNote.jsx";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext.js";
import { Button } from "./Button.jsx";
import { NoteView } from "./NoteView.jsx";

export const MainView = () => {
  const { state, dispatch } = useContext(NotesContext);

  return (
    <div className="border border-white mainView">
      <h1>Notes Manager</h1>
      <Row>
        <Col sm={7}>
          {state.idSelectedNote ? (
            <NoteView id={state.idSelectedNote} />
          ) : (
            <InputNote />
          )}
        </Col>

        <Col sm={5}>
          <Button
            content="+"
            className=""
            handleClick={() =>
              dispatch({
                type: "SET_ADD_NOTE",
              })
            }
          />
          <NotesContainer notes={state.notes} className="me-2 notesContainer" />
        </Col>
      </Row>
    </div>
  );
};

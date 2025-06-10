import { Col, Container, Row } from "react-bootstrap";
import { NotesContainer } from "./NotesContainer.jsx";
import { InputNote } from "./InputNote.jsx";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext.js";

export const MainView = () => {
  const { state, dispatch } = useContext(NotesContext);
  return (
    <>
      <Row>
        <Col sm={5}>
          <InputNote />
        </Col>
        <Col sm={7}>
          <NotesContainer notes={state.notes} />
        </Col>
      </Row>
    </>
  );
};

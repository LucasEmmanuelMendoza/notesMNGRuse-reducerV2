import { useReducer } from "react";
import { NotesContext } from "./NotesContext";

const initialState = {
  notes: [
    { id: 1, title: "asd", text: "xd" },
    { id: 2, title: "hola0", text: "owo" },
    { id: 3, title: "buenas", text: "asd" },
  ],
  inputTitle: "",
  inputText: "",
};

const reducer = (state, action) => {
  return state;
};

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

import { createContext, useReducer } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const initialState = {
    notes: [
      { id: 1, title: "asd", text: "xd" },
      { id: 2, title: "hola0", text: "owo" },
      { id: 3, title: "buenas", text: "asd" },
    ],
    inputTitle: "",
    inputText: "",
  };
  const reducer = ({ state, action }) => {
    switch (action.type) {
      case "ADD_NOTE":
      case "DELETE_NOTE":
      case "EDIT_NOTE":
      case "SELECT_NOTE":
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

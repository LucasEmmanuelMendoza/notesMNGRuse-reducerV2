import { useReducer } from "react";
import { NotesContext } from "./NotesContext";

const initialState = {
  id: 4,
  notes: [
    { id: 1, title: "asd", text: "aaa" },
    { id: 2, title: "hola0", text: "asdsad" },
    { id: 3, title: "hola1", text: "123" },
  ],
  inputTitle: "",
  inputText: "",
  idEditingNote: null,
  idSelectedNote: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_NOTE":
      //action.value = id
      const modNotes1 = state.notes.filter((note) => note.id != action.value);
      if (state.idEditingNote === action.value) {
        return {
          ...state,
          inputText: "",
          inputTitle: "",
          idEditingNote: null,
          notes: modNotes1,
        };
      } else {
        return {
          ...state,
          notes: modNotes1,
        };
      }

    case "ADD_NOTE":
      return {
        ...state,
        id: state.id++,
        inputText: "",
        inputTitle: "",
        notes: [
          ...state.notes,
          {
            id: state.id,
            title: state.inputTitle,
            text: state.inputText,
          },
        ],
      };

    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_EDIT_NOTE":
      const editNote = state.notes.find((note) => note.id == action.value);
      return {
        ...state,
        idSelectedNote: null,
        idEditingNote: action.value,
        inputTitle: editNote.title,
        inputText: editNote.text,
      };
    case "SAVE_NOTE":
      const modNotes = state.notes.map((note) => {
        if (note.id === state.idEditingNote) {
          return {
            ...note,
            title: state.inputTitle,
            text: state.inputText,
          };
        } else {
          return note;
        }
      });
      return {
        ...state,
        notes: modNotes,
      };
    case "SET_ADD_NOTE":
      return {
        ...state,
        idEditingNote: null,
        idSelectedNote: null,
        inputText: "",
        inputTitle: "",
      };
    case "SET_SELECTED_NOTE":
      return {
        ...state,
        idSelectedNote: action.value,
        idEditingNote: null,
        inputText: "",
        inputTitle: "",
      };
    default:
      return state;
  }
};

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

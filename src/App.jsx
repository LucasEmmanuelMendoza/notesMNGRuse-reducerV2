import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainView } from "./components/MainView";
import { NotesProvider } from "./context/NotesContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <NotesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainView />} />
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;

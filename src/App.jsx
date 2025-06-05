import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainView } from "./components/MainView";
import { NotesProvider } from "./context/NotesContext";

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

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StartGame from "./pages/components/StartGame";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

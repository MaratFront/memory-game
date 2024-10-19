import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Memory from "./pages/components/Memory";
import StartGame from "../src/pages/components/startGame/StartGame";
import { store } from "../src/Store/store";
import { Provider } from "react-redux"; // Импортируем Provider
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartGame />} />
          <Route path="/game" element={<Memory />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

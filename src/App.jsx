import { Route, Routes } from "react-router-dom";

import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";
import HomePage from "./pages/HomePage/HomePage";

function App() {

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <HomePage />
      </div>
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes, useNavigate } from "react-router-dom";

import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";
import Home from "./components/Home Page/Home";




function App() {
  function randomWord(){
    const words =[
        "Fig", "Date", "Kiwi", "Pear", "Plum",  // Fruits
        "Mango", "Lime", "Berry", "Yam", "Grapes",  // Fruits
        "Thor", "Hulk", "Wasp", "Nova", "IronMan", // Marvel heroes
        "Jack", "Groot", "Loki", "Dust", "Falcon" // Marvel heroes
      ];

      const index = Math.floor(Math.random()*20) + 1
      if(index < 10){
        return ["fruit",words[index]]
      }else{
        return ["Marvel Heros",words[index]]
      }
    }

  const [hint,word] = randomWord()
  const navigate = useNavigate();

  return (
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome to Hangman</h1> .
    //   <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is", value)} />
    // </div>
    <>
    <div className="flex justify-center m-4">
        <ul className="flex gap-5 items-center">
          <li 
          className="border border-[#ccc] rounded-xl px-6 py-1 bg-gradient-to-r from-teal-400  hover:from-teal-500 cursor-pointer"
           onClick={()=> navigate("/")}
           >Home</li>
          <li
          className="border border-[#ccc] rounded-xl px-6 py-1 bg-gradient-to-r from-teal-400  hover:from-teal-500 cursor-pointer"
           onClick={()=> navigate("/start")}
          >Start</li>
          <li
          className="border border-[#ccc] rounded-xl px-6 py-1 bg-gradient-to-r from-teal-400  hover:from-teal-500 cursor-pointer"
          onClick={()=> navigate("play", { state: {wordSelected: word, clue:hint}})}
          >Quick Start</li>
        </ul>
    </div>
    <Routes>
      <Route
      path="/" element={<Home/>} />
      <Route path="/play" element={<PlayGame />} />
      <Route path="/start" element={<StartGame />} />
      <Route path="/quickPlay" element={<PlayGame/>} />
      <Route path="*" element={<div> not found </div>} />
    </Routes>
    </>
   
      
  );
}

export default App;

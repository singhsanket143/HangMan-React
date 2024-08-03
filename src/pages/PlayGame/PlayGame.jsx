import { useLocation, useNavigate } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../components/HangMan/HangMan";

function PlayGame() {

    const [usedLetters, setUsedLetters] = useState([]);
    const [visible, setVisible] = useState("hidden")
    const [step, setStep] = useState(0);

    const location = useLocation(); 
    const wordSelected = location.state?.wordSelected; // If the state is not defined, it will return undefined, otherwise it will return the value of wordSelected
    const hint = location.state?.clue
    const navigate = useNavigate();

    const handleLetterClick = function(letter) {
        if (wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Incorrect');
            setStep(step + 1);
        }
        setUsedLetters([...usedLetters, letter]);
        if(step == 7){
            setVisible("block")
        }
    }
    
    return (
        <div className="w-full text-center">
            <h1 className="text-[20px] mt-10 font-bold text-[#ff4949] ">Play Game by and guess the word !</h1>
            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <h3 className="text-yellow-600 font-bold ">Hint - {hint}</h3>
            <hr/>
            <div className="flex justify-center items-center gap-20">
                <div className="w-[30%] ">
                    <LetterButtons  text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
                    <br />
                    <br />
                    <span>Guesses remaining - {step} out of 8</span>
                </div>
                
                <div className="w-[400px]">
                    <HangMan step={step}/>

                </div>
                
            </div>
            <div className={`w-[600px] h-[200px] border-[2px] border-black ${visible} bg-white rounded-xl absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}>
                <h2 className="text-[30px] mt-10"> Game Over </h2>
                <button 
                 onClick={()=> navigate("/start")}
                 className="bg-green-500  hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl mt-5 border-[2px] border-green-700">Start Again</button>
            </div>
        </div>
    );
}
export default PlayGame;
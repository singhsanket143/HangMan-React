import { useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../components/HangMan/HangMan";

function PlayGame() {

    const [usedLetters, setUsedLetters] = useState([]);
    const [step, setStep] = useState(0);

    const location = useLocation(); 
    const wordSelected = location.state?.wordSelected; // If the state is not defined, it will return undefined, otherwise it will return the value of wordSelected

    const handleLetterClick = function(letter) {
        if (wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Incorrect');
            setStep(step + 1);
        }
        setUsedLetters([...usedLetters, letter]);
    }

    return (
        <div className="p-10 w-full">
            <h1 className="text-white text-[25px] text-center font-bold">Guess the word</h1>
            
            <div className="flex justify-center my-3 font-bold"> 
                <MaskedText text={wordSelected} usedLetters={usedLetters} />
            </div>

            <div className="mt-12 flex justify-between w-[1000px]">
                <div className="basis-2/4">
                    <LetterButtons  text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
                </div>
                
                <div className="basis-2/4 flex justify-center items-center">
                    <HangMan step={step}/>
                </div>
                
            </div>

        </div>
    );
}
export default PlayGame;
import { Link, useLocation } from "react-router-dom";
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
        <div>
            <h1>Play Game</h1>
            
            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <hr/>

            <div className="flex justify-between items-center">
                <div className="basis-2/4">
                    <LetterButtons  text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
                </div>
                
                <div className="basis-2/4 flex justify-center items-center">
                    <HangMan step={step}/>
                </div>
                
            </div>

            

    
            <hr />

            <Link to='/start' className="text-blue-600 underline hover:text-blue-700"> Start Game </Link>
        </div>
    );
}
export default PlayGame;
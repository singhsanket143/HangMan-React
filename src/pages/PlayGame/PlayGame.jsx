import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";

function PlayGame() {

    const [usedLetters, setUsedLetters] = useState([]);

    const handleLetterClick = function(letter) {
        setUsedLetters([...usedLetters, letter]);
    }

    return (
        <div>
            <h1>Play Game</h1>
            
            <MaskedText text="humble" usedLetters={usedLetters} />
            <hr/>

            <LetterButtons  text="humble" usedLetters={usedLetters} onLetterClick={handleLetterClick} />
            <hr />

            <Link to='/start' className="text-blue-600 underline hover:text-blue-700"> Start Game </Link>
        </div>
    );
}
export default PlayGame;
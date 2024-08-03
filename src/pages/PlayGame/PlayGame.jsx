import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";

function PlayGame() {

    return (
        <div>
            <h1>Play Game</h1>
            
            <MaskedText text="humble" usedLetters={['b', 'e']} />
            <hr/>

            <LetterButtons usedLetters={['b', 'e']} />
            <hr />

            <Link to='/start'> Start Game </Link>
        </div>
    );
}
export default PlayGame;
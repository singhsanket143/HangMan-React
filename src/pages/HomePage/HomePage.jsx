import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";


function HomePage () {
    const navigate = useNavigate();
    function handleClick () {
        navigate('/start');
    }

    return (
        <div className="flex justify-center items-center gap-5 flex-col rounded-lg mt-12">
            <h1 className="text-[40px] text-center text-white font-bold">Welcome to Hangman</h1>
            <Button text={"START A NEW GAME"} styleType={'secondary'} onClickHandler={handleClick} />
        </div>
    );
}

export default HomePage;
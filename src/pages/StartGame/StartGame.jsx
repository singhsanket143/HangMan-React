import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

function StartGame() {

    const navigate = useNavigate();

    function handleSubmit(value) {
        navigate('/play', { state: {wordSelected: value}});
    }

    return (
        <div className="flex flex-col items-center justify-center gap-5 p-12">
            <h1 className="text-white text-[30px] font-bold">Start Game</h1>
            <TextInputFormContainer onSubmit={handleSubmit} />
        </div>
    );
}
export default StartGame;
import getButtonStyling from "./getButtonStyleType";


function Button({ buttonType = "button", text, styleType, onClickHandler }) {


    return (
        <button 
            type={buttonType}
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(styleType)}  text-white  rounded-md transition-all`}
        >
            {text}
        </button>
        
    );

}

export default Button;
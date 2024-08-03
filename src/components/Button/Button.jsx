import getButtonStyling from "./getButtonStyleType";


function Button({ buttonType = "button", text, styleType, onClickHandler, style}) {


    return (
        <button 
            type={buttonType}
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(styleType)}  text-white  rounded-md transition-all`}
            style={style}
        >
            {text}
        </button>
        
    );

}

export default Button;
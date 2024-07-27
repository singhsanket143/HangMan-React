import { useState } from "react";
import TextInputForm from "./TextInputForm";

// Container component for TextInputForm
function TextInputFormContainer({ onSubmit}) {
    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState('password');

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log('Form submitted', value);
        onSubmit?.(value); // if onSubmit is defined, call it with the value
    }

    function handleTextInputChange(event) {
        console.log('Text input changed');
        console.log(event.target.value);
        setValue(event.target.value); // whenever I Type in the input field, it will update the value
    }

    return (
        // Calling the presentation layer
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            value={value}
            inputType={inputType}
            setInputType={setInputType}
        />
    );

}

export default TextInputFormContainer;
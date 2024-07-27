import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button" ;
import { useState } from "react";

function TextInputForm({ onSubmit }) {
    const [type,setType] = useState('password')
    const [value, setValue] = useState('');

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
    let toggle = false;
    function ShowPass(){
        if(toggle){
            setType('password');
            toggle = false;
        }else{
            setType('text');
            toggle = true;
        }
    }

    return (
        <form className="flex" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                 <TextInput 
                    label="Enter a word or phrase"
                    type={type}
                    value={value}
                    onChange={handleTextInputChange}
                />
            </div>
            <button onClick={ShowPass}><span>show pass</span></button>
            <div className="flex">
                    <Button 
                        text="OK"
                        type="submit"
                    />
            </div>
        </form>
    );

}

export default TextInputForm;
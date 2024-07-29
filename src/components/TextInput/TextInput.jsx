import { useState } from "react";
import Button from "../Button/Button";

function TextInput({ label, type = "text", value, onChange }) {
    const [visibility, setVisibility] = useState(type);

    function handleClick() {
        setVisibility(prevVisibility => (prevVisibility === "password" ? "text" : "password"));
    }

    return (
        <label className="block">
            {label && <span className="text-gray-700">{label}</span>}
            <input
                className="px-4 py-2 border border-gray-500 rounded-md w-full"
                onChange={onChange}
                placeholder={label}
                type={visibility}
                value={value}
            />
            {type === "password" && (
                <Button 
                    text="text"
                    type="button"
                    onClickHandler={handleClick}
                />
            )}
        </label>
    );
}

export default TextInput;

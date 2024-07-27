import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";

function TextInputForm({ onSubmit }) {
  const [value, setValue] = useState("");
  const [bool, setBool] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted", value);
    onSubmit?.(value);
  }

  function handleTextInputChange(event) {
    console.log("Text input changed");
    console.log(event.target.value);
    setValue(event.target.value);
  }

  return (
    <form className="flex" onSubmit={handleFormSubmit}>
      <div className="mr-2 flex-1">
        <TextInput
          label="Enter a word or phrase"
          type={bool ? "text" : "password"}
          value={value}
          onChange={handleTextInputChange}
        />
      </div>

      <div className="flex">
        <button type="button" onClick={() => setBool((prev) => !prev)}>
          Click Me
        </button>
        <Button text="OK" type="submit" />
      </div>
    </form>
  );
}

export default TextInputForm;

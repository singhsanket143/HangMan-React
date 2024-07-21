import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Hello, world!</h1>
      <Button 
        text="Secondary" 
        buttonType="submit" 
        styleType="secondary" 
        onClickHandler={() => console.log("secondary clicked")} 

      />

      <Button 
        text="Primary" 
        buttonType="button" 
        styleType="primary" 
        onClickHandler={() => console.log("primary clicked")} 
        
      />

      <Button 
        text="warning" 
        buttonType="button" 
        styleType="warning" 
        onClickHandler={() => console.log("warning clicked")} 

      />

      <Button 
        text="error" 
        buttonType="button" 
        styleType="error" 
        onClickHandler={() => console.log("error clicked")} 

      />
    </div>
  );
}

export default App;

import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    // Add the code for the minus function 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    // Add the code for the plus function 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue !== 0) {
      setResult((result) => result / inputValue);
    } else {
      alert("Cannot divide by zero!");
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = ''; // Clear the input field
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0); // Reset the result to zero
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p> {/* Display the current total */}
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button> {/* Add the addition button */}
        <button onClick={minus}>subtract</button> {/* Add the subtraction button */}
        <button onClick={times}>multiply</button> {/* Add the multiplication button */}
        <button onClick={divide}>divide</button> {/* Add the division button */}
        <button onClick={resetInput}>reset input</button> {/* Add the reset input button */}
        <button onClick={resetResult}>reset result</button> {/* Add the reset result button */}
      </form>
    </div>
  );
}





export default App;

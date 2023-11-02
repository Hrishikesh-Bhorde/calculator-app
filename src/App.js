import "./App.css";
import React, { useState } from "react";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(0);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const addNumbers = () => {
    if ((input1 === "") | (input2 === "")) {
      setResult("Input values required");
    } else setResult(parseFloat(input1) + parseFloat(input2));
  };

  const subtractNumbers = () => {
    if ((input1 === "") | (input2 === "")) {
      setResult("Input values required");
    } else setResult(parseFloat(input1) - parseFloat(input2));
  };
  const multiplyNumbers = () => {
    if ((input1 === "") | (input2 === "")) {
      setResult("Input values required");
    } else setResult(parseFloat(input1) * parseFloat(input2));
  };

  const divideNumbers = () => {
    if (input2 === "0") {
      setResult("Cannot divide by zero");
    } else {
      setResult(parseFloat(input1) / parseFloat(input2));
    }
  };

  const percentNumbers = () => {
    if ((input1 === "") | (input2 === "")) {
      setResult("Input values required");
    } else setResult(parseFloat(input1) % parseFloat(input2));
  };

  const reset = () => {
    setInput1("");
    setInput2("");
    setResult(0);
  };

  return (
    <div className="App">
      <h1 style={{ color: "#b30000" }}>Calculator App</h1>
      <input
        className="cus-inp"
        type="number"
        placeholder="Num 1"
        name="num1"
        value={input1}
        onChange={handleInput1Change}
      ></input>
      <br />
      <input
        className="cus-inp"
        type="number"
        placeholder="Num 2"
        name="num2"
        value={input2}
        onChange={handleInput2Change}
      ></input>
      <br />
      {/* <p className="ans_div">Ans</p> */}
      <hr style={{ border: "1px solid" }} />
      <b className="res">Ans : {result}</b>
      <hr style={{ border: "1px solid" }} />
      <br />
      <button className="cus-btn" onClick={addNumbers}>
        +
      </button>
      <button className="cus-btn" onClick={subtractNumbers}>
        -
      </button>
      <button className="cus-btn" onClick={divideNumbers}>
        /
      </button>
      <button className="cus-btn" onClick={multiplyNumbers}>
        X
      </button>
      <button className="cus-btn" onClick={percentNumbers}>
        %
      </button>
      <br></br>
      <button onClick={reset} className="reset-btn">
        RESET
      </button>
    </div>
  );
}

export default App;

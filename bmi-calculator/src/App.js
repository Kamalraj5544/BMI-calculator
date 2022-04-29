import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if ((weight > 500 && height > 200) || weight === "" || height === "") {
      alert("Sorry it can be calculated");
    } else {
      let r = height ** 2;
      setResult(((weight / r) * 10 ** 4).toFixed(1));
    }
  };
  const Reset = () => {
    setWeight("");
    setHeight("");
    setResult("");
  };

  return (
    <div className="container">
      <div className="heading">BMI Calculator</div>
      <label className="label">
        Enter weight in kg :
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input-area"
          placeholder="eg.62"
        />
      </label>
      <label className="label">
        Enter height in cm :
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="input-area"
          placeholder="eg.165"
        />
      </label>
      <button onClick={calculateBMI} className="btn-element">
        Calculate
      </button>
      <button onClick={Reset} className="btn-element">
        Reset
      </button>

      <div className="value">Your BMI : {result}</div>

      <div className="ranges">
        <li>{`Under-weight (< 18.5)`} </li>
        <li>{`Normal (18.5 - 25)`}</li>
        <li>{`Over-weight (25 - 30)`}</li>
        <li>{`Obesity (> 30)`}</li>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import styled from "styled-components";
import Result from "./Result";
import Error from "./Error";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [error, setError] = useState("");
  const [specificError, setSpecificError] = useState("");
  const [success, setSuccess] = useState("");
  const [calculationMessage, setCalculationMessage] = useState("");

  const number1 = (e) => {
    setNum1(e.target.value);
  };

  const number2 = (e) => {
    setNum2(e.target.value);
  };

  const calculate = (ope) => {
    if (num1 === "") {
      setError("Error!");
      setSpecificError("Num1 cannot be empty");
      setSuccess("");
      setCalculationMessage("");
      return;
    }
    if (num2 === "") {
      setError("Error!");
      setSpecificError("Num2 cannot be empty");
      setSuccess("");
      setCalculationMessage("");
      return;
    }

    const firstNum = parseFloat(num1);
    const secNum = parseFloat(num2);

    setError("");
    setSpecificError("");
    setSuccess("Success!");

    let calcResult;
    switch (ope) {
      case "+":
        calcResult = firstNum + secNum;
        break;
      case "-":
        calcResult = firstNum - secNum;
        break;
      case "*":
        calcResult = firstNum * secNum;
        break;
      case "/":
        calcResult = firstNum / secNum;
        break;
      default:
        break;
    }
    setCalculationMessage(`Result - ${calcResult}`);
  };

  return (
    <Maincontainer>
      <Formcontainer>
        <h2>React Calculator</h2>
        <Form>
          <input
            type="text"
            placeholder="Num 1"
            onChange={number1}
            value={num1}
          />
          <input
            type="text"
            placeholder="Num 2"
            onChange={number2}
            value={num2}
          />
          <Buttoncontainer>
            <button type="button" onClick={() => calculate("+")}>
              +
            </button>
            <button type="button" onClick={() => calculate("-")}>
              -
            </button>
            <button type="button" onClick={() => calculate("*")}>
              *
            </button>
            <button type="button" onClick={() => calculate("/")}>
              /
            </button>
          </Buttoncontainer>
        </Form>
        {error && specificError ? (
          <Error error={error} specificError={specificError} />
        ) : (
          <Result success={success} calculationMessage={calculationMessage} />
        )}
      </Formcontainer>
    </Maincontainer>
  );
};

export default Calculator;

const Maincontainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Formcontainer = styled.div`
  width: 300px;
  height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, rgba(255,0,0,0.5), rgba(0,0,255,0.5));
    z-index: -1;
    border-radius: 30px;
    filter: blur(20px);
    opacity: 0.8;
  }

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  
`;
const Form = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 25px;
  input {
    /* height:60px; */
    font-size: 20px;
    outline: none;
  }
`;

const Buttoncontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* border:1px solid black; */
  button {
    padding: 3px 10px;
    font-size: 20px;
    width: auto;
    cursor: pointer;
  }
`;

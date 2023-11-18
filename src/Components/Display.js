import React, { useState } from 'react';
import { SiAddthis } from "react-icons/si";
import { FaMinusSquare } from "react-icons/fa";
import { BsFillSlashSquareFill } from "react-icons/bs";
import { TbSquareAsteriskFilled } from "react-icons/tb";

const Calculator = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [result, setResult] = useState(0);
  const [error, setError] = useState('');


  //Checking Input
  const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);
  const isNonEmpty = (value) => value.trim() !== '';

  const validateInput = (value, operandNumber) => {
    if (!isNonEmpty(value)) {
      setError(`Num ${operandNumber} is required.`);
      return false;
    }

    if (!isNumber(value)) {
      setError(`Num ${operandNumber} must be a valid number.`);
      return false;
    }

    setError('');
    return true;
  };


  //converting string to number
  const handleOperandChange = (e, operandNumber) => {
    const value = e.target.value;

    if (validateInput(value, operandNumber)) {
      operandNumber === 1 ? setOperand1(value) : setOperand2(value);
    }
  };



  //Operations
  const handleAddition = () => {
    if (validateInput(operand1, 1) && validateInput(operand2, 2)) {
      setResult(parseFloat(operand1) + parseFloat(operand2));
    }
  };

  const handleSubstraction = () => {
    if (validateInput(operand1, 1) && validateInput(operand2, 2)) {
      setResult(parseFloat(operand1) - parseFloat(operand2));
    }
  };

  const handleMultiplication = () => {
    if (validateInput(operand1, 1) && validateInput(operand2, 2)) {
      setResult(parseFloat(operand1) * parseFloat(operand2));
    }
  };

  const handleDevision = () => {
    if (validateInput(operand1, 1) && validateInput(operand2, 2)) {
      setResult(parseFloat(operand1) / parseFloat(operand2));
    }
  };


  return (
    <div class="display">
        <div class="box shadow">
            <h1>React Calculator</h1>
            <input type='text' placeholder='Num1' onChange={(e) => handleOperandChange(e,1)} />
            <input type='text' placeholder='Num2' onChange={(e) => handleOperandChange(e,2)} />
            <div id="btn">
                <button className='icon' type="submit" onClick={handleAddition}><SiAddthis /></button>
                <button className='icon' type="submit" onClick={handleSubstraction}><FaMinusSquare /></button>
                <button className='icon' type="submit" onClick={handleMultiplication}><TbSquareAsteriskFilled /></button>
                <button className='icon' type="submit" onClick={handleDevision}><BsFillSlashSquareFill /></button>
            </div>
            {error && <p style={{ color: 'red',padding:'10px' }}>Error!</p>}
            {error && <p style={{padding:'10px' }}>{error}</p>}
            {result !==0 && <p style={{ color: 'blue',padding:'10px' }}>Success!</p>}
            {result !== 0 && <p style={{padding:'10px' }}>Result: {result}</p>}
        </div>
    </div>
  );
};

export default Calculator;

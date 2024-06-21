import React, { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <>
    <h1>Hello from my REACT PROJECT !!!!!!)))))</h1>
    <Input placeholder="Enter text here" onChange={handleInputChange} />
    <Button text="Click me" onClick={handleClick} />
    </>
  )
}

export default App

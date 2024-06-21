import React from 'react';
import './input.css'

const Input = ({ placeholder, onChange }) => {
  return <input type="text" placeholder={placeholder} onChange={onChange} />;
};

export default Input;
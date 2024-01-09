import React, { useState, useEffect } from 'react';
import '../styles/OptionField.css';

const OptionField = ({ title, option1, option2, onChange, value }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(value);

  useEffect(() => {
    setOpcaoSelecionada(value);
  }, [value]);

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setOpcaoSelecionada(selectedOption);
    onChange(selectedOption);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach((input) => {
      input.checked = input.value === opcaoSelecionada;
    });
  }, [opcaoSelecionada]);

  return (
    <div>
      <div className='signup-label'>{title}</div>
      <div className="form-options-container">
        <div className='option-container'>
          <label className='signup-option-label'>
            <input
              type="radio"
              checked={opcaoSelecionada === option1}
              onChange={handleChange}
              value={option1}
            />
            <span className="checkmark"></span>
            {option1}
          </label>
        </div>
        <div className='option-container'>
          <label className='signup-option-label'>
            <input
              type="radio"
              checked={opcaoSelecionada === option2}
              onChange={handleChange}
              value={option2}
            />
            <span className="checkmark"></span>
            {option2}
          </label>
        </div>
      </div>
    </div>
  );
};

export default OptionField;

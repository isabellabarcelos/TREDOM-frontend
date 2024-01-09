import React, { useState } from 'react';
import EyeOpenIcon from '../assets/images/view.png';
import EyeClosedIcon from '../assets/images/hide.png';
import '../styles/PasswordField.css';

const PasswordField = ({ value, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const [isContainerFocused, setIsContainerFocused] = useState(false);

  const handleInputFocus = () => {
    setIsContainerFocused(true);
  };

  const handleInputBlur = () => {
    setIsContainerFocused(false);
  };

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`password-field ${isContainerFocused ? 'focused' : ''}`}>
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="***********"
        className='password-input'
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        required
        value={value}
        onChange={handleInputChange}
      />
      <img
        src={isPasswordVisible ? EyeOpenIcon : EyeClosedIcon}
        alt="Ícone de visualização de senha"
        className="eye-img"
        onClick={togglePasswordVisibility}
      />
    </div>
  );
};

export default PasswordField;

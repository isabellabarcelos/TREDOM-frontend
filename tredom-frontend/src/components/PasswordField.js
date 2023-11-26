import React, { useState } from 'react';
import EyeOpenIcon from '../assets/images/eye-open.png';
import EyeClosedIcon from '../assets/images/eye-closed.png';
import '../styles/PasswordField.css';

const PasswordField = () => {
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

  return (
    <div className={`password-field ${isContainerFocused ? 'focused' : ''}`}>
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="senha"
        className='password-input'
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
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

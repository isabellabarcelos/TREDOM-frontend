import '../styles/Login.css';
import logo from '../assets/images/logo.png';
import PasswordField from "../components/PasswordField"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import Cookies from 'js-cookie';


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleRedirectForgotPassword = () => {
    navigate('/esqueci-minha-senha');
  };

  const handleRedirectSignUp = () => {
    navigate('/cadastro');
  };
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        localStorage.setItem('jwt', token);
        navigate('/meus-pacientes');
      } else {
        const errorData = await response.json();

        if (errorData.message === 'Invalid credentials.') {
          setErrorMessage('E-mail ou senha inválidos.');
        } else if (errorData.message === 'Invalid email format.') {
          setErrorMessage('Formato de e-mail inválido.');
        } else {
          setErrorMessage('Erro. Tente novamente.');
        }
      }
    } catch (error) {
      console.error('Erro:', error);
      setErrorMessage('Erro. Tente novamente.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="welcome-section">
        <div className='welcome-message'>
          Olá! Faça login para acessar informações terapêuticas.
        </div>
        <div className='register-section'>
          <div className='register-message'>
            Ainda não possui uma conta?
          </div>
          <div>
            <button className='register-button' onClick={handleRedirectSignUp}>Cadastre-se</button>
          </div>
        </div>
      </div>
      <div className="login-section">
        <div className='logo-img'>
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className='login-title'>
          <h2>Login</h2>
          <div className='error-message'>{errorMessage}</div>
        </div>
        <div className='login-form'>
          <form onSubmit={handleLogin}>
            <div className='form-text-input-container-div'>
                    <div className='signup-label'>E-mail</div>
                    <input 
                      type="email" 
                      id="email" name="email" 
                      className='email-input' 
                      placeholder="e-mail"
                      value={formData.email} 
                      onChange={handleInputChange}/>
    
                  <div className='signup-label'>Senha:</div>
                  <PasswordField
                    value={formData.password} 
                    onChange={(value) => handleInputChange({ target: { name: 'password', value } })} />
                </div>
            <div className='forgot-password-link' onClick={handleRedirectForgotPassword}>
              esqueci minha senha
            </div>
            <div className='login-section-button'>
              <button type="submit">Entrar</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import '../styles/Login.css';
import logo from '../assets/images/logo.png';
import PasswordField from "../components/PasswordField"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

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
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Supondo que o token retornado esteja na propriedade "token" do objeto retornado
        const token = data.token;
  
        // Salvar o token em localStorage ou em um estado do seu aplicativo para uso posterior
        localStorage.setItem('token', token);
  
        alert('Login realizado com sucesso!');
        // Redirecionar para a página após o login
        // Substitua '/dashboard' pelo caminho desejado após o login
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        alert('Falha no login: ' + errorData.message);
      }
    } catch (error) {
      console.error('Erro:', error);
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

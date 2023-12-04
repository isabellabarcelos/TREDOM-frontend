import { React } from 'react';
import '../styles/Login.css';
import logo from '../assets/images/logo.png';
import PasswordField from "../components/PasswordField"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleRedirectForgotPassword = () => {
    navigate('/forgotmypassword');
  };

  const handleRedirectSignUp = () => {
    navigate('/signup');
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de login aqui
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
            <input type="email" id="email" name="email" required className='email-input' placeholder="e-mail" />
            <PasswordField/>
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

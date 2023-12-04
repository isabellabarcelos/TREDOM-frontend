import { React, useState   } from 'react';
import '../styles/SignUp.css';
import logo from '../assets/images/logo.png';
import PasswordField from "../components/PasswordField"
import { useNavigate } from 'react-router-dom';
import OptionField from '../components/OptionField';

const SignUp1 = () => {
  return (
    <div className="signup-container">
      <div className="signup-section">
        <div className='logo-img'>
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className='signup-title'>
          <h2>Crie sua conta</h2> 
        </div>
        <div className='signup-form'>
          <form>
            <OptionField/>
            <div className='form-text-input-container'>
              <div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>E-mail</div>
                  <input type="email" id="email" name="email" required className='email-input' placeholder="e-mail" />
                </div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Nome Completo:</div>
                  <input type="text" id="fullName" name="fullName" required className='email-input' placeholder="Nome Completo" />
                </div>
              </div> 
              <div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Senha:</div>
                  <PasswordField/>
                </div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Confirme sua senha:</div>
                  <PasswordField/>
                </div>
              </div> 
            </div>
            <div className='buttons-container'>
              <div className= 'login-button' >
                <button type="button">Login</button>
              </div>
              <div className= 'signup-button'>
                <button type="submit">Próximo</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp1;

  
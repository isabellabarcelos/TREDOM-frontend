import { React, useState   } from 'react';
import '../styles/SignUp.css';
import logo from '../assets/images/logo.png';
import PasswordField from "../components/PasswordField"
import { useNavigate } from 'react-router-dom';
import OptionField from '../components/OptionField';

const SignUp2 = () => {
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
            <div className='form-text-input-container'>
              <div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Data de Nascimento</div>
                  <input type="date" id="date" name="date" required className='email-input' placeholder="xx/xx/xx" />
                </div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Município de Atuação:</div>
                  <input type="text" id="city" name="city" required className='email-input' placeholder="Município" />
                </div>
              </div> 
              <div>
                <div className='form-text-input-container-div'>
                    <div className='signup-label'>Registro Médico:</div>
                    <input type="text" id="medicalregister" name="medicalregister" required className='email-input' placeholder="XXXXXXXXX" />
                </div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Especialidade:</div>
                  <input type="text" id="medicalspecialty" name="medicalspecialty" required className='email-input' placeholder="Fisioterapeuta" />
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

export default SignUp2;

  
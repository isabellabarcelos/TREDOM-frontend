import React, { useState, useEffect } from 'react';
import '../styles/SignUp.css';
import logo from '../assets/images/logo.png';
import PasswordField from "../components/PasswordField"
import { useNavigate, useLocation } from 'react-router-dom';
import OptionField from '../components/OptionField';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    profileType: '',
    date: '',
    city: '',
    medicalregister: '',
    medicalspecialty: '',
    phone: '',
    gender:'',
  });

  useEffect(() => {
    if (location.state) {
      const { email, fullName, password, confirmPassword, profileType, date, city, medicalregister, medicalspecialty, phone, gender } = location.state;
      setFormData({
        email,
        fullName,
        password,
        confirmPassword,
        profileType,
        date,
        city,
        medicalregister,
        medicalspecialty,
        phone,
        gender
      });
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRedirectLogin = () => {
    navigate('/login');
  };

  const handleRedirectNext = async (e) => {
    e.preventDefault();
    const verifyData = {
      "email": formData.email,
      "password": formData.password,
      "profile_type": formData.profileType === 'Profissional da Saúde' ? 'professional' : 'patient',
      "confirm_password": formData.confirmPassword,
      "name":  formData.fullName
    };
    
    try {
      const response = await fetch('http://127.0.0.1:5000/init-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(verifyData),
      });
      if (response.ok) {
        if (formData.profileType === 'Profissional da Saúde') {
          navigate('/cadastro-profissional', { state: formData });
        } else if (formData.profileType === 'Paciente') {
          navigate('/cadastro-paciente', { state: formData });
        }
      } else {
        const errorData = await response.json();
        if (errorData.message === 'All fields are required.'){
          setErrorMessage('Preencha todos os campos.');
        }
        else if (errorData.message === "Password and confirm password do not match."){
          setErrorMessage('As senhas não coincidem.');
        }
        else if (errorData.message === 'Password must be at least 6 characters long.'){
          setErrorMessage('A senha precisa conter pelo menos 6 caracteres.');
        }
        else if (errorData.message === 'Invalid email format.'){
          setErrorMessage('Formato de e-mail inválido.');
        }
        else if (errorData.message === 'A user with that email already exists.'){
          setErrorMessage('E-mail já cadastrado. Realize seu login!');
        }
        else {
          setErrorMessage('Erro. Tente novamente.');
        }
      }
    } catch (error) {
      console.error('Erro:', error);
      setErrorMessage('Erro. Tente novamente.');
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-section">
        <div className='logo-img'>
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className='signup-title'>
          <h2>Crie sua conta</h2>
          <div className='error-message'>{errorMessage}</div>
        </div>
        <div className='signup-form'>
          <form>
          <OptionField
            title="Tipo de Perfil:"
            option1="Profissional da Saúde"
            option2="Paciente"
            onChange={(value) => handleInputChange({ target: { name: 'profileType', value } })}
            value={formData.profileType}
          />
            <div className='form-text-input-container'>
              <div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>E-mail</div>
                  <input 
                    type="email" 
                    id="email" name="email" 
                    className='email-input' 
                    placeholder="e-mail"
                    value={formData.email} 
                    onChange={handleInputChange}/>
                </div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Nome Completo:</div>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    className='email-input' 
                    placeholder="Nome Completo"
                    value={formData.fullName}
                    onChange={handleInputChange}/>
                </div>
              </div> 
              <div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Senha:</div>
                  <PasswordField
                    value={formData.password} 
                    onChange={(value) => handleInputChange({ target: { name: 'password', value } })} />
                </div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Confirme sua senha:</div>
                  <PasswordField 
                    value={formData.confirmPassword}
                    onChange={(value) => handleInputChange({ target: { name: 'confirmPassword', value } })} />
                </div>
              </div> 
            </div>
            <div className='buttons-container'>
              <div className= 'login-button' >
                <button type="button" onClick={handleRedirectLogin}>Login</button>
              </div>
              <div className= 'signup-button'>
                <button type="button" onClick={handleRedirectNext}>Próximo</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

  
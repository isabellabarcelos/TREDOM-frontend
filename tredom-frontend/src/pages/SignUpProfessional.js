import React, { useState, useEffect } from 'react';
import '../styles/SignUp.css';
import logo from '../assets/images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const SignUpProfessional = () => {

  const navigate = useNavigate();
  const location = useLocation();
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
    gender: '',
  });

  useEffect(() => {
    if (location.state) {
      const { email, fullName, password, confirmPassword, profileType, date, city,  medicalregister, medicalspecialty, phone, gender } = location.state;
      setFormData({
        ...formData,
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

  const handleRedirectBack = () => {
    navigate('/cadastro', { state: formData });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:8000/finalize-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
          alert('Cadastro realizado com sucesso!');
          navigate('/login');
      } else {
        const errorData = await response.json();
        alert('Request failed: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
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
        </div>
        <div className='signup-form'>
          <form>
            <div className='form-text-input-container'>
              <div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Data de Nascimento</div>
                  <input
                    type="date" 
                    id="date" 
                    name="date"  
                    className='email-input' 
                    placeholder="dd/mm/aaaa"
                    value={formData.date} 
                    onChange={handleInputChange}/>
                </div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Município de Atuação:</div>
                  <input 
                    type="text" 
                    id="city" 
                    name="city"  
                    className='email-input' 
                    placeholder="Município de Atuação"
                    value={formData.city} 
                    onChange={handleInputChange}/>
                </div>
              </div> 
              <div>
                <div className='form-text-input-container-div'>
                    <div className='signup-label'>Registro Médico:</div>
                    <input 
                      type="text" 
                      id="medicalregister" 
                      name="medicalregister"  
                      className='email-input' 
                      placeholder="xxxxxxxxxx"
                      value={formData.medicalregister}  
                      onChange={handleInputChange}/>
                </div>
                <div className='form-text-input-container-div'>
                  <div className='signup-label'>Especialidade:</div>
                  <input 
                    type="text" 
                    id="medicalspecialty"
                    name="medicalspecialty" 
                    className='email-input' 
                    placeholder="Fisioterapia"
                    value={formData.medicalspecialty} 
                    onChange={handleInputChange}/>
                </div>
              </div> 
            </div>
            <div className='buttons-container'>
              <div className= 'login-button' >
                <button type="button" onClick={handleRedirectBack}>Voltar</button>
              </div>
              <div className= 'signup-button'>
                <button type="button" onClick={handleRegister}>Cadastrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpProfessional;

// Header.js
import React from 'react';
import '../styles/Header.css'; // Importe o arquivo de estilo
import logo from '../assets/images/logo.png';
import notifications from '../assets/images/notification.png';
import user from '../assets/images/user.png';
import logout from '../assets/images/logout.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
      });

      if (response.ok) {
        localStorage.removeItem('jwt');
        navigate('/login');
      } else {
        console.error('Erro ao efetuar logout');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <header>
      <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="actions">
        <a href="/notifications"><img src={notifications} alt="Logo" className="icon-image" /></a>
        <a href="/profile"><img src={user} alt="Logo" className="icon-image" /></a>
        <button onClick={handleLogout} className="custom-image-button">
          <img src={logout} alt="Logo" className="icon-image" />
        </button>
      </div>
    </header>
  );
};

export default Header;


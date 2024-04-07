import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpPatient from './pages/SignUpPatient';
import SignUpProfessional from './pages/SignUpProfessional';
import ForgotMyPassword from './pages/ForgotMyPassword';
import MyPatients from './pages/MyPatients';
import { jwtDecode } from 'jwt-decode';


const isAuthenticated = () => {

  const token = localStorage.getItem('jwt');
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const isTokenExpired = decodedToken.exp < Date.now() / 1000;

      return !isTokenExpired;
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }

  return false;
};


const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/cadastro-paciente" element={<SignUpPatient />} />
          <Route path="/cadastro-profissional" element={<SignUpProfessional />} />
          <Route path="/esqueci-minha-senha" element={<ForgotMyPassword />} />
          
          {/* Rota protegida */}
          <Route
            path="/meus-pacientes"
            element={<PrivateRoute element={<MyPatients />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

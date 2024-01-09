import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpPatient from './pages/SignUpPatient';
import SignUpProfessional from './pages/SignUpProfessional';
import ForgotMyPassword from './pages/ForgotMyPassword';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}


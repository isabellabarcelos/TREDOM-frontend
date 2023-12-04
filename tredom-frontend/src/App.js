import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp1 from './pages/SignUp1';
import SignUp2 from './pages/SignUp2';
import ForgotMyPassword from './pages/ForgotMyPassword';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/forgotmypassword" element={<ForgotMyPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


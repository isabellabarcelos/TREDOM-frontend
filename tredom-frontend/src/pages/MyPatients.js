// MyPatients.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/MyPatients.css'; 
import add from '../assets/images/add.png';
import trash from '../assets/images/trash.png';
import more from '../assets/images/more.png';
import { useNavigate } from 'react-router-dom';


const MyPatients = () => {

  const [newPatientEmail, setNewPatientEmail] = useState('');
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleAddPatient = async () => {
    const AddPatientData = {
      patient_email: newPatientEmail,
    };
  
    try {
      const response = await fetch('http://127.0.0.1:5000/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify(AddPatientData),
      });
  
      if (response.ok) {
        alert('Solicitação enviada com!');
        // Limpe o campo de busca após adicionar
        setNewPatientEmail('');
      } else {
        const errorData = await response.json();
        console.error('Erro na requisição:', errorData);
        alert('Erro ao enviar solicitação!');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      navigate('/login');
    }
  };
  
  useEffect(() => {
    // Recupere o token do localStorage ou do estado global
    const token = localStorage.getItem('jwt');

    if (token) {
      try {
        // Tente decodificar o token
        const decodedToken = JSON.parse(atob(token.split('.')[1]));

        // Obtém o ID do usuário do token decodificado
        const userId = decodedToken.user_id;

        // Armazena o ID do usuário no estado
        setUserId(userId);
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        // Trate o erro de decodificação aqui, se necessário
      }
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="patients-container">
          {/* Div para Novo Paciente */}
          <div className="new-patient">
        <h3>Novo Paciente</h3>
        <div className="new-patient-form">
          <input
            type="text"
            placeholder="e-mail"
            value={newPatientEmail}
            onChange={(e) => setNewPatientEmail(e.target.value)}
          />
            <button onClick={handleAddPatient}><img src={add} alt="Logo" className="add-image" /> Adicionar</button>
        </div>
      </div>

      <div className="pending-requests">
        <h5>Pedidos Pendentes de Configuração</h5>
        <div className="table-container">
          <table className="patient-table">
            <tbody>
              {/* Linha 1 */}
              <tr>
                <td>Nome do Paciente 1</td>
                <td>
                  <div className='actions'>
                    <a href="/notifications">
                      <img src={trash} alt="Logo" className="icon-image" />
                    </a>
                  </div>
                </td>
              </tr>

              {/* Linha 2 */}
              <tr>
                <td>Nome do Paciente 2</td>
                <td>
                  <div className='actions'>
                      <a href="/notifications">
                        <img src={trash} alt="Logo" className="icon-image" />
                      </a>
                    </div>
                </td>
              </tr>

              {/* Adicione mais linhas conforme necessário */}
              {/* Linha 2 */}
              <tr>
                <td>Nome do Paciente 2</td>
                <td>
                  <div className='actions'>
                    <a href="/notifications">
                      <img src={trash} alt="Logo" className="icon-image" />
                    </a>
                  </div>
                </td>
              </tr>
              {/* Linha 2 */}
              <tr>
                <td>Nome do Paciente 2</td>
                <td>
                  <div className='actions'>
                    <a href="/notifications">
                      <img src={trash} alt="Logo" className="icon-image" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>

    <div className="my-patients">
        <h3>Meus Pacientes</h3>
      <div className="table-container2">
        <table  className="patient-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>Configuração</th>
              <th>Última Configuração</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nome do Paciente 1</td>
              <td>01/01/1990</td>
              <td>Configuração 1</td>
              <td>01/01/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Nome do Paciente 2</td>
              <td>02/02/1995</td>
              <td>Configuração 2</td>
              <td>02/02/2022</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>
  );
};

export default MyPatients;

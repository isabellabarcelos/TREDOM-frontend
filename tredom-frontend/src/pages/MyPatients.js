// MyPatients.js
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import '../styles/MyPatients.css'; 
import add from '../assets/images/add.png';
import trash from '../assets/images/trash.png';
import more from '../assets/images/more.png';
import { useNavigate } from 'react-router-dom';


const MyPatients = () => {

  const navigate = useNavigate();
  const [newPatientEmail, setNewPatientEmail] = useState('');
  const [pendingRequests, setPendingRequests] = useState([]);
  const [myPatients, setMyPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requisição para obter as solicitações pendentes
        const pendingResponse = await fetch('http://127.0.0.1:5000/request', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
          },
        });
        if (pendingResponse.ok) {
          const pendingData = await pendingResponse.json();
          setPendingRequests(pendingData.patients);
          console.log(pendingData.patients)
        } else {
          console.error('Erro ao obter solicitações pendentes:', pendingResponse.statusText);
        }

        // Requisição para obter os pacientes
        const patientsResponse = await fetch('http://127.0.0.1:5000/relation', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
          },
        });
        if (patientsResponse.ok) {
          const patientsData = await patientsResponse.json();
          setMyPatients(patientsData.patients);
        } else {
          console.error('Erro ao obter pacientes:', patientsResponse.statusText);
        }
      } catch (error) {
        console.error('Erro ao fazer requisições:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddPatient = async () => {
    const AddPatientData = {
      email: newPatientEmail,
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
        alert('Solicitação enviada com sucesso!');
        setNewPatientEmail('');
        window.location.reload()
      } else {
        const errorData = await response.json();
        console.error('Erro na requisição:', errorData);
        
        let errorMessage = 'Erro ao enviar solicitação!';
      
        if (errorData.message === 'Invalid email format.') {
          errorMessage = 'Formato de e-mail inválido.';
        } else if (errorData.message === 'Patient not found.') {
          errorMessage = 'Paciente não encontrado.';
        } else if (errorData.message === 'Relationship already exists.') {
          errorMessage = 'Solicitação já enviada.';
        }
      
        alert(errorMessage);
      }
      
    } catch (error) {
      console.error('Erro na requisição:', error);
      navigate('/login');
    }
  };

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
              {pendingRequests.map((request, index) => (
                <tr key={index}>
                  <td>{request.email}</td>
                  <td>
                    <div className='actions'>
                      <a href="/notifications">
                        <img src={trash} alt="Logo" className="icon-image" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  <div className="my-patients">
    <h3>Meus Pacientes</h3>
    <div className="table-container2">
      <table className="patient-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Gênero</th>
            <th>Município</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {myPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.email}</td>
              <td>{patient.gender}</td>
              <td>{patient.location}</td>
              <td>
                <div className='actions'>
                  <a href="/notifications">
                    <img src={more} alt="Logo" className="icon-image" />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>   
  </div>
</div>
  );
};

export default MyPatients;

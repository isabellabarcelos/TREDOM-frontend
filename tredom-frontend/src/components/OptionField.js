import React, { useState } from 'react';
import '../styles/OptionField.css';

const OptionField = () => {
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

    const handleChange = (event) => {
        setOpcaoSelecionada(event.target.value);
    };
    return (
        <div>
            <div className='signup-label'> Tipo de perfil:</div>
            <div className="form-options-container">
                <div className='option-container'>
                    <label className='signup-option-label'>
                        <input
                            type="radio"
                            value="professional"
                            checked={opcaoSelecionada === "professional"}
                            onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                        Profissional da saúde
                    </label>
                </div>
                <div className='option-container'>
                    <label className='signup-option-label'>
                        <input
                            type="radio"
                            value="patient"
                            checked={opcaoSelecionada === 'patient'}
                            onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                        Paciente
                    </label>
                </div>
            </div>
        </div>
    );
    };

export default OptionField;
import React from 'react';
import { useNavigate } from 'react-router-dom';


interface BackButtonProps {
  title: string;
}

const BackButton: React.FC<BackButtonProps> = ({ title }) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/home'); // Navega para o menu
  };

  return (
    <div className="CarroC">
      <div className="set" onClick={handleBack}>
        <img className="seta" src="/Projeto-Porto/img/setaback.png" alt="Voltar" />
      </div>
      <div style={{ margin: 'auto' }}>
        <h4 style={{ fontSize: '20px' }}>{title}</h4>
      </div>
    </div>
  );
};

export default BackButton;

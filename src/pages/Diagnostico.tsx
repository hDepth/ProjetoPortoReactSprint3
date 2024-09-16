import React from 'react';
import Header from '../components/Header';
import CarroC from '../components/CarroC';
import DivLeft from '../components/DivLeft';
import '../styles/diagnostico.css';


const Diagnostico: React.FC = () => {
  return (
    <div className="diagnostico">
      <Header />
      <CarroC title="Diagnostico do Veículo" />
      <div className="divsp">
        <DivLeft text="Para indentificar o problema do carro é necessário que explique quais são os problemas e logo após tire uma foto do local sugerido no chat." />
      </div>
    </div>
  );
};

export default Diagnostico;

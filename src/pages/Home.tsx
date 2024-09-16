import React from 'react';
import Header from '../components/Header';
import CarroC from '../components/CarroC';
import Box from '../components/Box';
import Separator from '../components/Separador';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Line = styled.div`
  width: 80%;
  height: 200px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const Home: React.FC = () => { 

  const navigate = useNavigate();
  
  return ( 
  <>
    <Header />
    <CarroC />
    <Line>
      <Box imageSrc="/src/assets/adcveic.png" onClick={() => navigate("/adicionarveiculo")} />
      <Box imageSrc="/src/assets/monitoramento.png" onClick={() => navigate("/monitoramento")}  />
      <Box imageSrc="/src/assets/lembretes.png" onClick={() => navigate("/lembretes")}  />
      <Box imageSrc="/src/assets/preventiva.png" onClick={() => navigate("/preventiva")}  />
      <Box imageSrc="/src/assets/diag.png" onClick={() => navigate ("/diagnosticoveiculo")} />
    </Line>
    <Separator />
    <Line>
      <Box imageSrc="/src/assets/agend.png" onClick={() => navigate("/agendamento")} />
      <Box imageSrc="/src/assets/faq.png" onClick={() => navigate("/faq")} />
      <Box imageSrc="/src/assets/regism.png" onClick={() => navigate("/registromanutencao")} />
      <Box imageSrc="/src/assets/mecprox.png" onClick={() => navigate("/mecanicaproxima")} />
    </Line>
    <Footer />
  </>
);

}

export default Home;

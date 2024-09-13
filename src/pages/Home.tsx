import React from 'react';
import Header from '../components/Header';
import CarroC from '../components/CarroC';
import Box from '../components/Box';
import Separator from '../components/Separador';
import Footer from '../components/Footer';
import styled from 'styled-components';


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

const Home: React.FC = () => (
  <>
    <Header />
    <CarroC />
    <Line>
      <Box imageSrc="/src/assets/adcveic.png" onClick={() => window.location.href = "/adicionarveiculo"} />
      <Box imageSrc="/src/assets/monitoramento.png" onClick={() => window.location.href = "/monitoramento"} />
      <Box imageSrc="/src/assets/lembretes.png" onClick={() => window.location.href = "/lembrente"} />
      <Box imageSrc="/src/assets/preventiva.png" onClick={() => window.location.href = "/preventiva"} />
      <Box imageSrc="/src/assets/diag.png" onClick={() => window.location.href = "/diagnosticoveiculo"} />
    </Line>
    <Separator />
    <Line>
      <Box imageSrc="/src/assets/agend.png" onClick={() => window.location.href = "/agendamento"} />
      <Box imageSrc="/src/assets/faq.png" onClick={() => window.location.href = "/faq"} />
      <Box imageSrc="/src/assets/regism.png" onClick={() => window.location.href = "/registromanutencao"} />
      <Box imageSrc="/src/assets/mecprox.png" onClick={() => window.location.href = "/mecanicaproxima"} />
    </Line>
    <Footer />
  </>
);

export default Home;

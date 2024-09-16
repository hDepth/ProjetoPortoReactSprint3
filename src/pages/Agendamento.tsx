import React from 'react';
import Header from '../components/Header';
import CarroC from '../components/CarroC';
import OptionBox from '../components/OptionBox';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin: auto;
  padding: 10px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Agendamentos: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <CarroC/>
      <OptionsContainer>
        <OptionBox iconSrc="/Projeto-Porto/img/wrenchicon.png" text="Escolha qual o tipo de manutenção deseja fazer" />
        <OptionBox iconSrc="/Projeto-Porto/img/calendaricon.png" text="Qual dia deseja agendar?" />
        <OptionBox iconSrc="/Projeto-Porto/img/timeicon.png" text="Escolha um horário" />
        <OptionBox iconSrc="/Projeto-Porto/img/homeicon.png" text="Centro Automotivo Porto mais próximo de você" />
        <OptionBox iconSrc="/Projeto-Porto/img/cifrao.png" text="Cote agora" />
      </OptionsContainer>
    </PageContainer>
  );
};

export default Agendamentos;

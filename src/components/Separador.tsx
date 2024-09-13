import React from 'react';
import styled from 'styled-components';
import carroAzul from '../assets/carroazul.png';

const SeparatorWrapper = styled.div`
  width: 100%;
  background-color: #D9D9D9;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const SeparatorContent = styled.div`
  display: flex;
  align-items: center;
`;

const CarroImage = styled.img`
  width: 60px;
  margin-left: 10px;
`;

const BenefitsLink = styled.a`
  color: black;
`;

const Separator: React.FC = () => (
  <SeparatorWrapper>
    <SeparatorContent>
      <BenefitsLink href="/beneficios">Ir Para Benefícios</BenefitsLink>
      <CarroImage src={carroAzul} alt="" />
    </SeparatorContent>
  </SeparatorWrapper>
);

export default Separator;

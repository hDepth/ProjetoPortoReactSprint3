import React from 'react';
import styled from 'styled-components';
import chevroletLogo from '../assets/Chevrolet-Logo.png';

const CarroCWrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: #83ADFF;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  margin: auto;
`;

const CarroImage = styled.img`
  width: 70px;
  height: 40px;
`;

const H3 = styled.h3`
  margin: 0;
`;

const H4 = styled.h4`
  margin: 0;
`;

const CarroC: React.FC = () => (
  <CarroCWrapper>
    <HeaderContent>
      <CarroImage src={chevroletLogo} alt="" />
      <H3>ONIX</H3>
      <H4>Placa-1234</H4>
    </HeaderContent>
  </CarroCWrapper>
);

export default CarroC;

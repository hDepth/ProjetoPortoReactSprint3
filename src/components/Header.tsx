import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logoPorto.png';

const HeaderWrapper = styled.header`
  min-height: 80px;
  background-color: rgba(255, 255, 255, 0);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px;
  border-radius: 10px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Porto = styled.h1`
  color: blue;
  margin: 0;
`;

const Seguro = styled.h1`
  margin: 0;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo src={logo} alt="logoPorto" />
    <Title>
      <Porto>Porto</Porto>
      <Seguro>Seguro</Seguro>
    </Title>
  </HeaderWrapper>
);

export default Header;

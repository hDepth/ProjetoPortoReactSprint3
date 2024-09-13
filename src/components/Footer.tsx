import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logoPorto.png';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #D9D9D9;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const FooterImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const FooterLink = styled.a`
  margin-left: 10px;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterImage src={logo} alt="" />
    <div>
      <FooterLink href="#">Meus carros</FooterLink>
      <FooterLink href="/membros">Sobre Nós</FooterLink>
      <FooterLink href="/paginaInicial">Sair</FooterLink>
    </div>
  </FooterWrapper>
);

export default Footer;

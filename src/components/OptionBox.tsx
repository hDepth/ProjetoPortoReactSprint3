import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  width: 45%;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Retangulo = styled.div`
  width: 95%;
  height: 18%;
  margin: auto;
`;

const TtlContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.h4`
  margin-left: 10px;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }

  @media (max-width: 576px) {
    font-size: 4vw;
  }

  @media (max-width: 480px) {
    font-size: 5vw;
  }
`;

interface OptionBoxProps {
  iconSrc: string;
  text: string;
}

const OptionBox: React.FC<OptionBoxProps> = ({ iconSrc, text }) => {
  return (
    <BoxContainer>
      <Retangulo>
        <TtlContainer>
          <IconBox>
            <Icon src={iconSrc} alt="icon" />
          </IconBox>
          <Text>{text}</Text>
        </TtlContainer>
      </Retangulo>
    </BoxContainer>
  );
};

export default OptionBox;

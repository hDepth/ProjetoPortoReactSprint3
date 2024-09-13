import React from 'react';
import styled from 'styled-components';

const BoxWrapper = styled.div`
  width: calc(15% - 10px);
  height: 140px;
  background-color: #D9D9D9;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.5s ease-in-out;
  margin: 5px;
  
  &:hover {
    box-shadow: 0 0 10px 8px #83ADFF;
  }
`;

const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`;

interface BoxProps {
  imageSrc: string;
  onClick: () => void;
}

const Box: React.FC<BoxProps> = ({ imageSrc, onClick }) => (
  <BoxWrapper onClick={onClick}>
    <ImgBox src={imageSrc} alt="" />
  </BoxWrapper>
);

export default Box;

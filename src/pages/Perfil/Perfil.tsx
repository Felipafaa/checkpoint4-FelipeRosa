import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start;    
  justify-content: flex-start; 
  height: 100vh;               
  padding: 10px;               
`;

const TextoPerfil = styled.h1`
   color: #38aede;           
  margin: 0; 
  font-family: Arial, Helvetica, sans-serif ;                  
`;

const Perfil: React.FC = () => {
  return (
    <Container>
      <TextoPerfil>Perfil</TextoPerfil>
    </Container>
  );
};

export default Perfil;

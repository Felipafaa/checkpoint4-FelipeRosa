import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start;    
  justify-content: flex-start; 
  height: 100vh;              
  padding: 10px;               
`;

const TextoHome = styled.h1`
  color: #38aede;           
  margin: 0; 
  font-family: Arial, Helvetica, sans-serif ;
`;
//oi professor ubirajara!
const Home: React.FC = () => {
  return (
    <Container>
      <TextoHome>Home</TextoHome>
    </Container>
  );
};

export default Home;

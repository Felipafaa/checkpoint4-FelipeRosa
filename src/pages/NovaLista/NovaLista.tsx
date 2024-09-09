import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start; 
  padding: 20px; 
  height: 90vh;
`;

//oi professor ubirajara 
const ContainerInput = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
`;

const Input = styled.input`
padding: 10px;
font-size: 16px;
margin-right: 10px;
width: 250px;
`;

const BotaoAdicionar = styled.button`
background-color: #38aede;
color: white;
padding: 10px;
border: none;
display: flex;
align-items: center;
justify-content: center;
`;

const Titulo = styled.h1`
  color: #38aede;
  font-family: Arial, Helvetica, sans-serif ;
`;


export const NovaLista: React.FC = () => {
const [item, setItem] = useState('');

const adicionarItem = () => {
if (item) {
console.log(`Item adicionado: ${item}`);
setItem('');
}
};

return (
<Container>
<Titulo>Nova Lista</Titulo>
<ContainerInput>
<Input
type="text"
placeholder="Digite o item desejado"
value={item}
onChange={(e) => setItem(e.target.value)}
/>
<BotaoAdicionar onClick={adicionarItem}>
<FaPlus />
</BotaoAdicionar>
</ContainerInput>
</Container>
);
};

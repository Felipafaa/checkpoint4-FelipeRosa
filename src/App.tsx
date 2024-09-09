import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { NovaLista } from './pages/NovaLista/NovaLista';
import { FaHome, FaUser, FaListAlt } from 'react-icons/fa';
import styled from 'styled-components';
import Perfil from './pages/Perfil/Perfil';
import Home from './pages/Home/Home';


const Navegacao = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid #ccc;
`;

const ItemNavegacao = styled(NavLink)`
  color: #38aede;
  text-decoration: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &.active {
    color: #2880a3;
  }
`;


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/nova-lista" element={<NovaLista />} />
      </Routes>
      <Navegacao>
        <ItemNavegacao to="/" end>
          <FaHome />
          Home
        </ItemNavegacao>
        <ItemNavegacao to="/nova-lista">
          <FaListAlt />
          Nova Lista
        </ItemNavegacao>
        <ItemNavegacao to="/perfil">
          <FaUser />
          Perfil
        </ItemNavegacao>
      </Navegacao>
    </Router>
  );
};

export default App;

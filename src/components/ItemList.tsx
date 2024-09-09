import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlusCircle } from 'react-icons/fi';

const Container = styled.div`
  padding: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    color: #007bff;
    font-size: 24px;
  }
`;

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  input {
    margin-right: 10px;
  }
`;

const ItemList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <Container>
      <h2>Nova lista</h2>
      <InputContainer>
        <Input
          type="text"
          placeholder="Digite o item desejado"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <AddButton onClick={handleAddItem}>
          <FiPlusCircle />
        </AddButton>
      </InputContainer>
      <ListContainer>
        {items.map((item, index) => (
          <ListItem key={index}>
            <input type="radio" name="item" />
            {item}
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
};

export default ItemList;

import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { gray, primary } from '../colors';

const Title = styled.h1`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 0;
`;

const Header = styled.header`
  background-color: ${gray.n300};
  padding: 15px 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  ${Title} {
    color: ${primary.n600}
  }
`;

const Menu = styled.div``;

export default ({ onAddJournal }) => (
  <Header>
    <Title>My Journal</Title>
    <Menu>
      <Button onClick={onAddJournal}>Add Journal</Button>
    </Menu>
  </Header>
);

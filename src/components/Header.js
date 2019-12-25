import React from 'react';
import styled from 'styled-components';
import alpha from 'color-alpha';
import { gray, primary, secondary } from '../colors';

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

const Button = styled.button`
  border-width: 0;
  background-color: ${primary.default};
  color: white;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover{
    background-color: ${primary.n600};
  }

  &:active {
    background-color: ${primary.n900};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${alpha(primary.default, '.4')};
    outline-width: 0
  }
`;

export default () => (
  <Header>
    <Title>My Journal</Title>
    <Menu>
      <Button>Add Journal</Button>
    </Menu>
  </Header>
);

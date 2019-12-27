import React from 'react';
import styled from 'styled-components';
import { gray } from '../colors';

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Toolbar = styled.div`
  display: flex;
`;

const ButtonToolbar = styled.button`
  border-width: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-size: 26px;
  padding: 0 16px;

  &:hover {
    background-color: ${gray.n200};
  }
  &:active {
    background-color: ${gray.n400};
  }
`;

const Title = styled.input`
  flex: 1;
  margin-left: 15px;
  font-size: 22px;
  padding: 14px 14px;
  outline-width: 0;
  border-width: 0;
`;

const Body = styled.div`
  flex: 1;
`;

const Content = styled.textarea`
  outline-width: 0;
  padding: 15px 20px;
  border-width: 0;
  width: 100%;
  min-height: calc(100% - 50px);
  font-size: 18px;
`;

const Status = styled.div`
  background-color: ${gray.n400};
  padding: 8px 12px;
  text-align: right;
`;


const PageUp = () => (
  <Box>
    <Toolbar>
      <ButtonToolbar>←</ButtonToolbar>
      <Title value="Journal" />
      <ButtonToolbar>×</ButtonToolbar>
    </Toolbar>
    <Body>
      <Content>content</Content>
    </Body>
    <Status>status</Status>
  </Box>
);

export default PageUp;

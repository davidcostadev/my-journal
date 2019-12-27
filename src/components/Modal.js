import React from 'react';
import styled from 'styled-components';

const setOpened = (props) => {
  return props.isOpen ? 'block' : 'none'
}

export const Box = styled.div`
  display: ${setOpened};
  position: fixed;
  background-color: white;
  z-index: 1010;
  top: 20px;
  width: calc(100% - 100px);
  margin-left: 30px;
  margin-right: 30px;
  padding: 15px 20px;
  border-radius: 2px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
`;

export const BackDrop = styled.div`
  display: ${setOpened};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`

export default {
  Box,
  BackDrop,
}

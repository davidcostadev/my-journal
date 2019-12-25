import React from 'react';
import styled from 'styled-components';
import { gray } from '../colors';

const Box = styled.div`
  border: 1px solid ${gray.n300};
  border-radius: 2px;

  &+& {
    margin-top: 15px;
  }
`;

const Title = styled.div`
  padding: 8px 12px;
  border-bottom: 1px solid ${gray.n300};
  background-color: ${gray.n300};
`;

const Body = styled.div`
  padding: 8px 12px;
`;

const Card = () => (
  <Box>
    <Title>This is a title</Title>
    <Body>this is a content</Body>
  </Box>
);

export default Card;

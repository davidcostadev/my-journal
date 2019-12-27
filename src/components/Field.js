import React from 'react';
import styled from 'styled-components';
import { gray } from '../colors';

const Field = styled.input`
  display: block;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 2px;
  border: 1px solid ${gray.n400};
  margin-bottom: 15px;
`;

export default Field;

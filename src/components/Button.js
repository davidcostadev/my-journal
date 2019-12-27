import styled from 'styled-components';
import { primary, secondary, gray } from '../colors';
import alpha from 'color-alpha';

const theme = {
  primary: {
    boxShallow: primary.default,
    backgroundColor: primary.default,
    backgroundColorHover: primary.n600,
    backgroundColorActive: primary.n900,
  },
  secondary: {
    backgroundColor: secondary.default
  },
  gray: {
    boxShallow: gray.default,
    backgroundColor: gray.default,
    backgroundColorHover: gray.n600,
    backgroundColorActive: gray.n800,
  },
}


const setBackground = property => ({ color = 'primary' }) => {
  return theme[color][property]
};

const getBoxShallow = ({ color = 'primary' }) => {
  return alpha(theme[color].boxShallow, '.4')
};

const Button = styled.button`
  border-width: 0;
  background-color: ${setBackground('backgroundColor')};
  color: white;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${setBackground('backgroundColorHover')};
  }

  &:active {
    background-color: ${setBackground('backgroundColorActive')};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${getBoxShallow};
    outline-width: 0
  }
`;

export default Button;

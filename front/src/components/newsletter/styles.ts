import styled from 'styled-components';

import { colors, mobile, transitions } from '../../styles';

const { announcement, background, secondaryBackground } = colors;
const { darkerGradient } = transitions;

export const Container = styled.div`
  height: 60vh;
  background-color: ${secondaryBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: ${background};
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '80%' })}
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: ${announcement};
  color: ${background};
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      rgba(0, 0, 0, ${darkerGradient}),
      rgba(0, 0, 0, ${darkerGradient})
    );
  }
`;

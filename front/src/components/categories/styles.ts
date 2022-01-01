import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { mobile } from '../../styles/responsive';

const { shadow, buttonFont } = colors;

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;

export const CategoryItem = styled.div`
	flex: 1,
	margin: 3px;
	height: 70vh;
	position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: ${shadow};
  color: ${buttonFont};
  cursor: pointer;
  font-weight: 600;
`;

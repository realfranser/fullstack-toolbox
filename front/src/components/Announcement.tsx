import styled from 'styled-components';
import { colors } from '../styles/colors';

const { announcement, secondaryFont } = colors;

const Container = styled.div`
  height: 30px;
  background-color: ${announcement};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: ${secondaryFont};
`;

export const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

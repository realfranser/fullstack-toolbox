import styled from 'styled-components';

import { colors } from '../../styles/colors';

const { announcement, secondaryFont } = colors;

export const Container = styled.div`
  height: 30px;
  background-color: ${announcement};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: ${secondaryFont};
`;

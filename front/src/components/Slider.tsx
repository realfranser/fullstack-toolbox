import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { colors } from '../styles/colors';

const { shadow, background } = colors;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${background};
  position: relative;
`;

interface ArrowProps {
  direction: string;
}

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${shadow};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: ArrowProps) => props.direction === 'left' && '10px'};
  right: ${(props: ArrowProps) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.66;
`;

export const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

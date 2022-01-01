import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { mobile } from '../../styles/responsive';

const { shadow, background } = colors;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: ${background};
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

interface ArrowProps {
  direction: string;
}

export const Arrow = styled.div`
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
  z-index: 2;
`;

interface WrapperProps {
  slideIndex: number;
}

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: WrapperProps) => props.slideIndex * -100}vw);
`;

interface SlideProps {
  bg: string;
}

export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props: SlideProps) => props.bg};
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const Image = styled.img`
  height: 80%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

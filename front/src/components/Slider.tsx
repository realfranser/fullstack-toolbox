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

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="src/images/summer_sneakers.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sneakers</Title>
            <Description>This is the best summer sneaker for 2022</Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="src/images/winter_sneakers.jpeg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Winter Sneakers</Title>
            <Description>This is the best winter sneaker for 2022</Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="src/images/running_sneakers.jpeg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Running Sneakers</Title>
            <Description>
              This is the running summer sneaker for 2022
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

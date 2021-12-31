import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import {
  Container,
  Button,
  Arrow,
  Description,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from './styles';

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: string) => {};

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
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
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

import { Send } from '@material-ui/icons';

import {
  Container,
  Button,
  Description,
  Input,
  InputContainer,
  Title,
} from './styles';

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

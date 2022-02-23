import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import {
  Container,
  Desc,
  SocialContainer,
  SocialIcon,
  Logo,
  ListItem,
  List,
  Title,
  Left,
  Center,
  Right,
  ContactItem,
  Payment,
} from './styles';
import { media } from '../../styles/colors';

const { facebook, instagram, twitter, pinterest } = media;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Toolbox</Logo>
        <Desc>
          Fullstack toolbox is a project that intends to create in unprecedented
          time a MVP for any kind of e-commerce site. The main technologies used
          are: Typescript (react + express), Node, Golang(mux + gorm), Docker,
          AWS and Stripe.
        </Desc>
        <SocialContainer>
          <SocialIcon color={facebook}>
            <Facebook />
          </SocialIcon>
          <SocialIcon color={instagram}>
            <Instagram />
          </SocialIcon>
          <SocialIcon color={twitter}>
            <Twitter />
          </SocialIcon>
          <SocialIcon color={pinterest}>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> Paseo de la Castellana, 77,
          Madrid, Spain
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +34 630 820 734
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> fullstack@toolbox.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

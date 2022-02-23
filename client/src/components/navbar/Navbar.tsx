import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';

import { colors } from '../../styles/colors';
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from './styles';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

const { buttonFont } = colors;

export const Navbar = () => {
  const quantity = useSelector((state: RootState) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: buttonFont, fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Toolbox</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

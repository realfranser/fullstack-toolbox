import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';

import { colors } from '../../styles/colors';
import {
  Center,
  Container,
  Input,
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

  const value = 'summer';

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input type="text" />
            <a
              href={`/products/${value}`}
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              <Search style={{ color: buttonFont, fontSize: 26 }} />
            </a>
          </SearchContainer>
        </Left>
        <Center>
          <a href="/" style={{ all: 'unset', cursor: 'pointer' }}>
            <Logo>Toolbox</Logo>
          </a>
        </Center>
        <Right>
          <Link to="/register" style={{ all: 'unset', cursor: 'pointer' }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ all: 'unset', cursor: 'pointer' }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
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

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';

import { Circle, Container, Icon, Product, Info, Image } from './styles';
import { productList, IProduct } from './data';

export const Products = () => {
  return (
    <Container>
      {productList.items.map((item: IProduct) => (
        <Product key={item.id}>
          <Circle />
          <Image src={item.img} />
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <SearchOutlined />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
        </Product>
      ))}
    </Container>
  );
};

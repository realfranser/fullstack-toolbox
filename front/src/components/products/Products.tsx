import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Circle, Container, Icon, Product, Info, Image } from './styles';
import { fetchProductList } from './services';
import {
  defaultProductList,
  IFetchProductListParams,
  IProduct,
  IProductList,
} from './data';

export const Products = ({
  props,
  category,
}: {
  props: IFetchProductListParams;
  category: string;
}) => {
  const [products, setProducts] = useState<IProductList>(defaultProductList);

  useEffect(() => {
    fetchProductList(props, category)
      .then((productList) => {
        setProducts(productList);
      })
      .catch(() => {
        console.log('Error getting all the products');
      });
  }, [props, category]);

  return (
    <Container>
      {products.items.map((item: IProduct) => (
        <Product key={item.id}>
          <Circle />
          <Image src={item.img} />
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <Link to={`/product/${item.id}`}>
                <SearchOutlined />
              </Link>
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

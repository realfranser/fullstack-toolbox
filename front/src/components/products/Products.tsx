import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { useEffect, useState } from 'react';

import { Circle, Container, Icon, Product, Info, Image } from './styles';
import { productList } from './data';
import {
  fetchProductList,
  IFetchProductListParams,
  IProduct,
  IProductList,
} from './services';

export const Products = ({
  props,
  category,
}: {
  props: IFetchProductListParams;
  category: string;
}) => {
  let initialProductList: IProductList = productList;
  fetchProductList(props, category)
    .then((productList) => {
      initialProductList = productList;
    })
    .catch(() => {
      alert('Error getting all the products');
      initialProductList = productList;
    })
    .finally(() => {
      initialProductList = productList;
    });

  const [products, setProducts] = useState<IProductList>(initialProductList);

  useEffect(() => {
    fetchProductList(props, category)
      .then((productList) => {
        setProducts(productList);
      })
      .catch(() => {
        alert('Error getting all the products');
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

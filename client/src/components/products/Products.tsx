import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Circle,
  Container,
  Icon,
  Product,
  ProductWrapper,
  Info,
  Image,
} from './styles';
import { usePagination } from '../shared/pagination';
import { mockFetchProductList } from './services';
import { IFetchProductListParams, IProduct, IProductList } from './data';

export const Products = ({
  props,
  category,
}: {
  props: IFetchProductListParams;
  category: string;
}) => {
  const [products, setProducts] = useState<IProductList>(
    mockFetchProductList(props, category, props.pagination.pageIndex)
  );
  const { renderPagination, paginationState } = usePagination(
    products.pagination
  );

  useEffect(() => {
    /*
    fetchProductList(props, category)
      .then((productList) => {
        setProducts(productList);
      })
      .catch(() => {
        setProducts(DEFAULT_PRODUCT_LIST);
      });
      */
    const prods = mockFetchProductList(
      props,
      category,
      paginationState.pageIndex
    );
    setProducts(prods);
  }, [props, category, paginationState]);

  return (
    <Container>
      <ProductWrapper>
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
      </ProductWrapper>
      {products.pagination.pageCount > 1 ? renderPagination : null}
    </Container>
  );
};

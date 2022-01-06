import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Announcement, Footer, Navbar, Newsletter } from '../../components';
import { DEFAULT_PRODUCT_ID, DEFAULT_PRODUCT, IProduct } from './data';
import { fetchProduct } from './services';
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  InfoContainer,
  Image,
  ImgContainer,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Price,
  Title,
  Wrapper,
} from './styles';

interface ProductOptions {
  amount: number;
  color?: string;
  size?: string;
}

export const Product = () => {
  let { id } = useParams();
  if (id === undefined) id = DEFAULT_PRODUCT_ID;
  const productId = parseInt(id);
  const defaultProductOptions = { amount: 0 };

  const [product, setProduct] = useState<IProduct>(DEFAULT_PRODUCT);
  const [options, setOptions] = useState<ProductOptions>(defaultProductOptions);

  useEffect(() => {
    fetchProduct(productId)
      .then((product: IProduct) => setProduct(product))
      .catch(() => alert('Error getting the selected product'));
  }, [productId]);

  const handleColor = (color: string) => {
    setOptions({
      ...options,
      color: color,
    });
  };

  const handleSize = (size: string) => {
    setOptions({
      ...options,
      size: size,
    });
  };

  const handleDecreaseAmount = () => {
    if (options.amount < 1) return;
    setOptions({
      ...options,
      amount: options.amount - 1,
    });
  };

  const handleIncreaseAmount = () => {
    setOptions({
      ...options,
      amount: options.amount + 1,
    });
  };

  console.log(`This is the amount value: ${options}`);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.colors.map((color) => (
                <FilterColor
                  key={color}
                  bg={color}
                  onClick={() => handleColor(color)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.sizes.map((size) => (
                  <FilterSizeOption key={size} onClick={() => handleSize(size)}>
                    {size}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: 'pointer' }}
                onClick={handleDecreaseAmount}
              />
              <Amount>{options.amount}</Amount>
              <Add
                style={{ cursor: 'pointer' }}
                onClick={handleIncreaseAmount}
              />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

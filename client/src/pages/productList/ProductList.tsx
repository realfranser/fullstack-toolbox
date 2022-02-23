import { useParams } from 'react-router-dom';
import { useState } from 'react';

import {
  Navbar,
  Announcement,
  Newsletter,
  Footer,
  Products,
} from '../../components';
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title,
} from './styles';
import { DEFAULT_CATEGORY } from './data';
import { IFetchProductListParams } from '../../components/products/data';

export const ProductList = () => {
  let { category } = useParams();
  if (category === undefined) category = DEFAULT_CATEGORY;

  const defaultProductListParams: IFetchProductListParams = {
    sort: 'newest',
    pagination: {
      pageIndex: 1,
      pageSize: 12,
    },
  };
  const [
    productListParams,
    setProductListParams,
  ] = useState<IFetchProductListParams>(defaultProductListParams);

  const handleFilters = (e: React.FormEvent<HTMLSelectElement>) => {
    setProductListParams({
      ...productListParams,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select name="sort" onChange={handleFilters}>
            <Option>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products props={productListParams} category={category} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

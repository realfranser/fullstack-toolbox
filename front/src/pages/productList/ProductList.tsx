//import { useLocation } from 'react-router-dom';
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

/*
interface ProductListProps {
  category: string;
}
*/

interface ProductListFilters {
  color?: string;
  size?: string;
  sort: string;
}

export const ProductList = () => {
  //const location = useLocation();
  //const { category } = location.state as ProductListProps;

  const defaultFilters = {
    sort: 'Newest',
  };
  const [filters, setFilters] = useState<ProductListFilters>(defaultFilters);

  const handleFilters = (e: React.FormEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
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
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

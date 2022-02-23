import { API } from '../../constants/services';

export const DEFAULT_PRODUCT_ID = '0';
export const SERVICE_URL = API.V1_PRODUCT;

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
  colors: ('Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow')[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL')[];
}

export const DEFAULT_PRODUCT: IProduct = {
  id: 0,
  title: 'Denim Jumpsuit',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
  price: 20,
  img: 'https://i.ibb.co/S6qMxwr/jean.jpg',
  colors: ['Black', 'Blue', 'Green'],
  sizes: ['XS', 'S', 'M'],
};

type color = 'Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow';
type size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface IProduct {
  name: string;
  category: string;
  price: number;
  colorList: color[];
  sizeList: size[];
  img: string;
  description: string;
}

export const DEFAULT_PRODUCT: IProduct = {
  name: 'Denim Jumpsuit',
  category: 'Spring',
  price: 29.99,
  colorList: ['Black', 'Blue', 'Green'],
  sizeList: ['XS', 'S', 'M'],
  img: 'https://i.ibb.co/S6qMxwr/jean.jpg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
};

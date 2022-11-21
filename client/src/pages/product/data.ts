const DRIVE_PATH = 'https://drive.google.com/uc?export=view&id=';

type color = 'Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow';
type size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  colorList: color[];
  sizeList: size[];
  img: string;
  description: string;
}

export const DEFAULT_PRODUCT_ID = '0';

export const DEFAULT_PRODUCT: IProduct = {
  id: 0,
  name: 'Denim Jumpsuit',
  category: 'Spring',
  price: 29.99,
  colorList: ['Black', 'Blue', 'Red'],
  sizeList: ['XS', 'S', 'M'],
  img: `${DRIVE_PATH}1cg7zgcRu1Y1M_rcR3oKF46ZzuHLStWDQ`,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
};

export const DEFAULT_PRODUCT_2: IProduct = {
  id: 0,
  name: 'Denim Jumpsuit',
  category: 'Spring',
  price: 29.99,
  colorList: ['Black', 'Blue', 'Red'],
  sizeList: ['XS', 'S', 'M'],
  img: `${DRIVE_PATH}1TuNX0AJQqbGDq-s44vFMb2TU3E2zlqHQ`,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
};

export const getProduct = (productId: number): IProduct => {
  if (productId == 1) {
    return DEFAULT_PRODUCT_2;
  }

  return DEFAULT_PRODUCT;
};

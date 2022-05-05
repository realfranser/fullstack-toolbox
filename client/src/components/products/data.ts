import { IPaginationRequest, IPaginationResponse } from '../shared/pagination';

type color = 'Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow';
type size = 'XS' | 'S' | 'M' | 'L' | 'XL';
type sort = 'Newest' | 'Price (asc)' | 'Price (desc)';

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  description: string;
}

export interface IProductList {
  items: IProduct[];
  pagination: IPaginationResponse;
}

export interface IFetchProductListParams {
  color?: color;
  size?: size;
  sort: sort;
  pagination: IPaginationRequest;
}

const IMAGE_PATH = 'src/images/products';

export const DEFAULT_PRODUCT_LIST: IProductList = {
  items: [
    {
      id: 1,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_1.png`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 2,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_2.png `,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 3,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_3.png`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 4,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_4.png`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 5,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_5.png`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 6,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_6.png`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 7,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_7.png`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 8,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_8.png`,
      description: 'Best guitar t-shirt in the world',
    },
  ],
  pagination: {
    pageCount: 1,
  },
};

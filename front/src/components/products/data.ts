import { IPaginationRequest, IPaginationResponse } from '../shared/pagination';
import { API } from '../../constants/services';

const IMAGE_PATH = 'src/images/products';
export const SERVICE_URL = API.V1_PRODUCTS;

export interface IProduct {
  id: number;
  img: string;
}

export interface IProductList {
  items: IProduct[];
  pagination: IPaginationResponse;
}

export interface IFetchProductListParams {
  color?: 'Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow';
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL';
  sort: 'asc' | 'desc' | 'newest';
  pagination: IPaginationRequest;
}

export const defaultProductList: IProductList = {
  items: [
    {
      id: 1,
      img: `${IMAGE_PATH}/img_1.png`,
    },
    {
      id: 2,
      img: `${IMAGE_PATH}/img_2.png `,
    },
    {
      id: 3,
      img: `${IMAGE_PATH}/img_3.png`,
    },
    {
      id: 4,
      img: `${IMAGE_PATH}/img_4.png`,
    },
    {
      id: 5,
      img: `${IMAGE_PATH}/img_5.png`,
    },
    {
      id: 6,
      img: `${IMAGE_PATH}/img_6.png`,
    },
    {
      id: 7,
      img: `${IMAGE_PATH}/img_7.png`,
    },
    {
      id: 8,
      img: `${IMAGE_PATH}/img_8.png`,
    },
  ],
  pagination: {
    pageCount: 4,
  },
};

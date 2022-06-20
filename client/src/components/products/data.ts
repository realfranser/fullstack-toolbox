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

const IMAGE_PATH = 'http://localhost:8080/src/images/products';
const DRIVE_PATH = 'https://drive.google.com/uc?export=view&id=';

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
    {
      id: 9,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1QBsu80VLFS0OoKOSemE2BNdMrIbL9mwS`,
      description: 'Best guitar t-shirt in the world',
    },
  ],
  pagination: {
    pageCount: 2,
  },
};

export const SUMMER_PRODUCT_LIST: IProductList = {
  items: [
    {
      id: 1,
      name: 'Summer Blue 1',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1TuNX0AJQqbGDq-s44vFMb2TU3E2zlqHQ`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 2,
      name: 'Summer blue 2',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1HMHDv9Q764RMyng4wD82ELWyG049q6yU`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 3,
      name: 'Summer Blue 3',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1QBsu80VLFS0OoKOSemE2BNdMrIbL9mwS`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 4,
      name: 'Summer Red 1',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1I7yTpAVfccfAPq0qnaELVsveMHGs6sv8`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 5,
      name: 'Summer Red 2',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1uznreq2Rc1QJvufTBNwnae8T8wzDAJga`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 6,
      name: 'Summer Red 3',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1cg7zgcRu1Y1M_rcR3oKF46ZzuHLStWDQ`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 7,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_1.png`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 8,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_2.png`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 9,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_3.png`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 10,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_4.png`,
      description: 'Best guitar t-shirt in the world',
    },
  ],
  pagination: {
    pageCount: 2,
  },
};

export const RED_PRODUCT_LIST: IProductList = {
  items: [
    {
      id: 4,
      name: 'Summer Red 1',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1I7yTpAVfccfAPq0qnaELVsveMHGs6sv8`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 5,
      name: 'Summer Red 2',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1uznreq2Rc1QJvufTBNwnae8T8wzDAJga`,
      description: 'Pax',
    },
    {
      id: 6,
      name: 'Summer Red 2',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1cg7zgcRu1Y1M_rcR3oKF46ZzuHLStWDQ`,
      description: 'Pax',
    },
    {
      id: 9,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${IMAGE_PATH}/img_3.png`,
      description: 'Best guitar t-shirt in the world',
    },
  ],
  pagination: {
    pageCount: 1,
  },
};

export const DEFAULT_PRODUCT_LIST_2: IProductList = {
  items: [
    {
      id: 10,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1HMHDv9Q764RMyng4wD82ELWyG049q6yU`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 11,
      name: 'Guitar t-shirt',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1cg7zgcRu1Y1M_rcR3oKF46ZzuHLStWDQ`,
      description: 'Best guitar t-shirt in the world',
    },
  ],
  pagination: {
    pageCount: 2,
  },
};

export const BLUE_PRODUCT_LIST: IProductList = {
  items: [
    {
      id: 1,
      name: 'Summer Blue 1',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1TuNX0AJQqbGDq-s44vFMb2TU3E2zlqHQ`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 2,
      name: 'Summer blue 2',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1HMHDv9Q764RMyng4wD82ELWyG049q6yU`,
      description: 'Best guitar t-shirt in the world',
    },
    {
      id: 3,
      name: 'Summer Blue 3',
      category: 'summer',
      price: 24.99,
      img: `${DRIVE_PATH}1QBsu80VLFS0OoKOSemE2BNdMrIbL9mwS`,
      description: 'Best guitar t-shirt in the world',
    },
  ],
  pagination: {
    pageCount: 1,
  },
};

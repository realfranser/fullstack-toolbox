const imagePath = 'src/images/products';

export interface IProduct {
  id: number;
  img: string;
}

export interface IProductList {
  items: IProduct[];
}

export const productList: IProductList = {
  items: [
    {
      id: 1,
      img: `${imagePath}/img_1.png`,
    },
    {
      id: 2,
      img: `${imagePath}/img_2.png `,
    },
    {
      id: 3,
      img: `${imagePath}/img_3.png`,
    },
    {
      id: 4,
      img: `${imagePath}/img_4.png`,
    },
    {
      id: 5,
      img: `${imagePath}/img_5.png`,
    },
    {
      id: 6,
      img: `${imagePath}/img_6.png`,
    },
    {
      id: 7,
      img: `${imagePath}/img_7.png`,
    },
    {
      id: 8,
      img: `${imagePath}/img_8.png`,
    },
  ],
};

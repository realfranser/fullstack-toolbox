const imagePath = 'src/images/categories';

export interface ICategory {
  id: number;
  img: string;
  title: string;
}

export interface ICategoryList {
  items: ICategory[];
}

export const categoryList: ICategoryList = {
  items: [
    {
      id: 1,
      img: `${imagePath}/summer_category.jpeg`,
      title: 'All the summer clothes HERE!',
    },
    {
      id: 2,
      img: `${imagePath}/winter_category.jpeg`,
      title: 'All the winter clothes HERE!',
    },
    {
      id: 3,
      img: `${imagePath}/running_category.jpeg`,
      title: 'All the running clothes HERE!',
    },
  ],
};

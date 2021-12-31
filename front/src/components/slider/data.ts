import { colors } from '../../styles/colors';

const { background } = colors;
const imagePath = 'src/images/sneakers';

export interface ISliderItem {
  id: number;
  img: string;
  title: string;
  description: string;
  bg: string;
}

export interface ISliderItemList {
  items: ISliderItem[];
}

export const sliderItems: ISliderItemList = {
  items: [
    {
      id: 1,
      img: `${imagePath}/summer_sneakers.jpg`,
      title: 'Summer Sneaker',
      description: 'This is the best summer sneaker for 2022',
      bg: `${background}`,
    },
    {
      id: 2,
      img: `${imagePath}/winter_sneakers.jpeg`,
      title: 'Winter Sneaker',
      description: 'This is the best winter sneaker for 2022',
      bg: `${background}`,
    },
    {
      id: 3,
      img: `${imagePath}/running_sneakers.jpeg`,
      title: 'Running Sneaker',
      description: 'This is the best running sneaker for 2022',
      bg: `${background}`,
    },
  ],
};

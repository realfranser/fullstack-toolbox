import { categoryList, ICategory } from './data';
import { Button, CategoryItem, Container, Image, Info, Title } from './styles';

export const Categories = () => {
  return (
    <Container>
      {categoryList.items.map((item: ICategory) => (
        <CategoryItem key={item.id}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </Info>
        </CategoryItem>
      ))}
    </Container>
  );
};

import {
  Arrow,
  Container,
  CurrenPage,
  CurrentPageInput,
  CurrentPageText,
  MaxPage,
  MaxPageButton,
  MaxPageText,
} from './styles';

export interface IPagination {
  pageIndex: number;
  pagesSize: number;
  pageCount: number;
  canNextPage: boolean;
  canPrevPage: boolean;
  offset?: number;
}

export interface IPaginationRequest {
  pageIndex: number;
  pageSize: number;
  offset?: number;
}

export interface IPaginationResponse {
  itemCount: number;
  pageCount: number;
}

export const back = () => {
  return 'hello';
};

export const Pagination = () => {
  return (
    <Container>
      <Arrow>Back</Arrow>
      <CurrenPage>
        <CurrentPageText>Current page:</CurrentPageText>
        <CurrentPageInput></CurrentPageInput>
      </CurrenPage>
      <MaxPage>
        <MaxPageText>Max page:</MaxPageText>
        <MaxPageButton></MaxPageButton>
      </MaxPage>
      <Arrow>Forward</Arrow>
    </Container>
  );
};

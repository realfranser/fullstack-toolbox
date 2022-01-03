import { useState } from 'react';
//import { useLocation } from 'react-router-dom';
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
  pageSize: number;
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
  pageCount: number;
}

export const Pagination = () => {
  /*
  const location = useLocation();
  const { pageCount } = location.state as IPaginationResponse;
  */
  const pageCount = 10;

  const defaultState: IPagination = {
    pageIndex: 1,
    pageSize: 12,
    pageCount: pageCount,
    canNextPage: pageCount > 1,
    canPrevPage: false,
  };
  const [state, setState] = useState(defaultState);

  const back = () => {
    if (!state.canPrevPage) {
      console.log('There is no BACK from the first page');
      return;
    }

    const newPageIndex = state.pageIndex - 1;
    let canPrevPage = true;
    if (newPageIndex === 1) canPrevPage = false;
    setState({
      ...state,
      pageIndex: newPageIndex,
      canPrevPage: canPrevPage,
      canNextPage: true,
    });
  };

  const forward = () => {
    if (!state.canNextPage) {
      console.log('There is no FORWARD from this last page');
      return;
    }

    const newPageIndex = state.pageIndex + 1;
    let canNextPage = true;
    if (newPageIndex === pageCount) canNextPage = false;
    setState({
      ...state,
      pageIndex: newPageIndex,
      canPrevPage: true,
      canNextPage: canNextPage,
    });
  };

  const maxPage = () => {
    if (state.pageIndex === state.pageCount) {
      /* REVIEW: if (!canNextPage) */
      console.log('You are already in the last page');
      return;
    }

    setState({
      ...state,
      pageIndex: state.pageCount,
      canPrevPage: true,
      canNextPage: false,
    });
  };

  const changeCurrentPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* TODO: change this awfull code */
    const inputElement = e.currentTarget[0] as HTMLInputElement;
    let newPageIndex = parseInt(inputElement.value);
    if (state.pageIndex === newPageIndex) {
      console.log('You are already in the last page');
      return;
    }
    if (newPageIndex < 1) newPageIndex = 1;
    if (newPageIndex > state.pageCount) newPageIndex = state.pageCount;

    setState({
      ...state,
      pageIndex: newPageIndex,
      canPrevPage: newPageIndex !== 1,
      canNextPage: newPageIndex !== state.pageCount,
    });
  };

  console.log(state);
  return (
    <Container>
      <Arrow onClick={back}>Back</Arrow>
      <CurrenPage onSubmit={changeCurrentPage}>
        <CurrentPageText>Current page:</CurrentPageText>
        <CurrentPageInput
          type="number"
          min="1"
          max={state.pageCount}
          defaultValue={state.pageIndex}
        ></CurrentPageInput>
      </CurrenPage>
      <MaxPage>
        <MaxPageText>Max page:</MaxPageText>
        <MaxPageButton onClick={maxPage}>{state.pageCount}</MaxPageButton>
      </MaxPage>
      <Arrow onClick={forward}>Forward</Arrow>
    </Container>
  );
};

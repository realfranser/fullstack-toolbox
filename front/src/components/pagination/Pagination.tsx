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
  const [currentPage, setCurrentPage] = useState(defaultState.pageIndex);

  const back = () => {
    if (!state.canPrevPage) {
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
    setCurrentPage(newPageIndex);
  };

  const forward = () => {
    if (!state.canNextPage) {
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
    setCurrentPage(newPageIndex);
  };

  const maxPage = () => {
    if (!state.canNextPage) {
      return;
    }

    setState({
      ...state,
      pageIndex: state.pageCount,
      canPrevPage: true,
      canNextPage: false,
    });
    setCurrentPage(state.pageCount);
  };

  const changePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    if (value === NaN) return;
    setCurrentPage(value);
  };

  const changeCurrentPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* TODO: change this awfull code */
    const inputElement = e.currentTarget[0] as HTMLInputElement;
    let newPageIndex = parseInt(inputElement.value);
    if (state.pageIndex === newPageIndex) {
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
          value={currentPage}
          onChange={changePageInput}
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

import styled from 'styled-components';

import { colors, transitions } from '../../../styles';

const { announcement, secondaryFont, shadow } = colors;
const { darkerGradient } = transitions;

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 3fr 2fr 1fr;
  margin-top: 0.75rem;
  margin-bottom: 1.5rem;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  font-size: 1rem;
`;

export const Arrow = styled.button`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
  line-height: 1.2;
  width: auto;
  height: 1.6rem;
  min-width: 0.75rem;
  padding-inline-start: 0.5rem;
  padding-inline-end: 0.5rem;
  border-radius: 0.375rem;
  border: none;
  background-color: ${announcement};
  color: ${secondaryFont};
  font-weight: 600;
  font-size: inherit;

  &:hover {
    background-image: linear-gradient(
      rgba(0, 0, 0, ${darkerGradient}),
      rgba(0, 0, 0, ${darkerGradient})
    );
  }
`;

export const CurrenPage = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CurrentPageText = styled.p`
  font-size: inherit;
  opacity: 0.8;
  margin-right: 0.25rem;
  display: block;
`;

export const CurrentPageInput = styled.input`
  width: 100%;
  min-width: 0px;
  outline: transparent solid 2px;
  outline-offset: 2px;
  position: relative;
  font-size: inherit;
  height: 1.5rem;
  padding-inline-start: 0.5rem;
  padding-inline-end: 0.5rem;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  background: inherit;
  max-width: 50px;
  :: -webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const MaxPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MaxPageText = styled.p`
  font-size: inherit;
  opacity: 0.8;
  margin-right: 0.25rem;
  display: block;
`;

export const MaxPageButton = styled.button`
  display: inline-flex;
  appearance: none;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: transparent solid 2px;
  outline-offset: 2px;
  width: auto;
  border-width: 1px;
  line-height: 1.2;
  border-radius: 0.25rem;
  font-weight: 600;
  height: 1.6rem;
  min-width: 50px;
  font-size: inherit;
  letter-spacing: 2px;
  padding-inline-start: 0.5rem;
  padding-inline-end: 0.5rem;
  background: ${shadow};
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      rgba(0, 0, 0, ${darkerGradient}),
      rgba(0, 0, 0, ${darkerGradient})
    );
  }
`;

import { css } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

import { css } from 'lit-element';

//this works and seems to be a good way to make keyframes reusable

export const uuiHorizontalShake = css`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(2px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-3px);
    }

    40%,
    60% {
      transform: translateX(3px);
    }
  }
`;

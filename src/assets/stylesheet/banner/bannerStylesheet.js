import { css } from "@emotion/css";

export const useBannerStyle = () => ({
  root: css`
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-size: contain;
    background-position: center center;
    flex-direction: row;

    .left-side {
      width: 70%;

      h2 {
        font-size: 38px;
        color: #2b2b2b;
      }

      p {
        color: #767676;
        font-size: 14px;
        width: 80%;
        text-align: justify;
      }

      button {
        background: #002f63 !important;
        color: #ffffff;
        margin-top: 25px;
      }
    }

    .right-side {
      width: 30%;
    }
  `,
});

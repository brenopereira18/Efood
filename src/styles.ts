import { createGlobalStyle } from "styled-components";

export const colors = {
  beige: "#FFEBD9",
  lightBeige: "#FFF8F2",
  orange: "#E66767",
  gray: "#4B4B4B",
};

export const breakpoints = {
  tablet: "1023px",
  mobile: "767px",
};

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breakpoints.tablet}) {
        max-width: 90%;
      }     
    }
`;

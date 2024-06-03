import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.header`
  height: 360px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    text-align: center;
  }

  p {
    font-size: 36px;
    font-weight: bold;
    line-height: 42.19px;
    color: ${cores.laranja};
    margin-top: 130px;
  }
`;

export const Logo = styled.img`
  margin-top: 64px;
`;

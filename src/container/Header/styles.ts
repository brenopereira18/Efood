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
    margin-top: 120px;
  }
`;

export const Logo = styled.img`
  margin-top: 64px;
`;

export const RestaurantHeader = styled.div`
  height: 186px;
  text-align: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: ${cores.laranja};
    font-size: 18px;
    font-weight: bold;
    margin-top: 82px;
  }
`;

import styled from "styled-components";
import { cores, dispositivo } from "../../styles";

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

    @media (max-width: ${dispositivo.mobile}) {
      margin: 80px 0 40px;
      font-size: 32px;
    }
  }
`;

export const Soon = styled.img`
  margin-top: 64px;
`;

export const RestaurantHeader = styled.div`
  height: 186px;
  text-align: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${dispositivo.mobile}) {
      padding-top: 20px;
    }
  }

  p {
    color: ${cores.laranja};
    font-size: 18px;
    font-weight: bold;
    margin-top: 82px;
  }

  ${Soon} {
    @media (max-width: ${dispositivo.mobile}) {
      margin-top: 0px;
      margin-bottom: 80px;
    }
  }
`;

export const Cart = styled.p`
  color: ${cores.laranja};
  font-size: 18px;
  font-weight: bold;
  margin-top: 82px;
  cursor: pointer;
`;

import styled from "styled-components";
import { cores, dispositivo } from "../../styles";
import { ButtonLink } from "../../components/Button/styles";

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const SideBar = styled.div`
  width: 360px;
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 32px 8px 8px 8px;

  @media (max-width: ${dispositivo.mobile}) {
    width: 320px;    
  }

  ${ButtonLink} {
    width: 100%;
    margin: 0;
  }
`;

export const CartItem = styled.div`
  position: relative;
  max-width: 344px;
  width: 100%;
  height: 100px;
  background-color: ${cores.bege};
  color: ${cores.laranja};
  padding: 8px;
  display: flex;
  margin-bottom: 12px;

  img:first-child {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    margin-bottom: 12px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    line-height: 21px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }
`;

export const ToExclude = styled.img`
  width: 16px;
  height: 16px;
  bottom: 8px;
  right: 8px;
  position: absolute;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
`;

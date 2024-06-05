import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";

export const Card = styled.div`
  width: 472px;
  color: ${cores.laranja};
  border: 1px solid ${cores.laranja};
  position: relative;
  margin-bottom: 48px;
  background-color: #fff;

  p {
    padding: 0 8px 16px 8px;
    font-size: 14px;
  }
`;

export const InfosTag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${ButtonContainer} {
    margin-right: 8px;
  }
`;

export const Imagem = styled.img`
  width: 472px;
  height: 217px;
`;

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 16px 8px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

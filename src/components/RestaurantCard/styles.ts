import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer, ButtonLink } from "../Button/styles";

export const Card = styled.div`
  width: 472px;
  color: ${cores.laranja};
  border: 1px solid ${cores.laranja};
  position: relative;
  margin-bottom: 48px;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  p {
    padding-bottom: 16px;
    font-size: 14px;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
  padding: 8px;
  
  ${ButtonLink} {   
    margin: 0; 
    margin-top: auto; 
    width: 82px;    
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
  padding-bottom: 8px;

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

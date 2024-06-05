import { styled } from "styled-components";
import { cores } from "../../styles";
import { ButtonLink } from "../Button/styles";

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.laranja};
  color: ${cores.begeClaro};
  padding: 8px;
  display: flex;
  flex-direction: column;  

  img {
    width: 304px;
    height: 167px;
  }

  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;   
  }

  h6 {
    font-size: 16px;
    font-weight: bold;
    padding: 8px 0;
  }

  p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  ${ButtonLink} {   
    margin: 0; 
    margin-top: auto;      
  }
`;

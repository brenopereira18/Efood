import { styled } from "styled-components";
import { cores, dispositivo } from "../../styles";

export const SectionFoods = styled.div`
  background-color: ${cores.begeClaro};
  padding: 64px 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${dispositivo.tablet}) {
    grid-template-columns: 1fr 1fr; 
    justify-items: center;        
  }

  @media (max-width: ${dispositivo.mobile}) {
    grid-template-columns: 1fr; 
    justify-items: center;     
  }
`;



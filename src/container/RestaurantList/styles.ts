import styled from "styled-components";
import { cores, dispositivo } from "../../styles";

export const SectionRestaurants = styled.section`
  background-color: ${cores.begeClaro};
  padding: 80px 0;  
`;

export const ContainerCard = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  text-decoration: none;
  list-style: none;

  @media (max-width: ${dispositivo.tablet}) {
    column-gap: 40px;      
  }

  @media (max-width: ${dispositivo.mobile}) {
    grid-template-columns: 1fr; 
    justify-items: center;     
  }
`


import styled from "styled-components";
import { cores } from "../../styles";

export const SectionRestaurants = styled.section`
  background-color: ${cores.begeClaro};
  padding: 80px 0;  
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`


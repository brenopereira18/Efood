import { styled } from "styled-components";
import { cores } from "../../styles";

export const SectionFoods = styled.div`
  background-color: ${cores.begeClaro};
  padding: 64px 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`;

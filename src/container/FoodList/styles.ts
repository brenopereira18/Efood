import { styled } from "styled-components";
import { colors, breakpoints } from "../../styles";

export const SectionFoods = styled.div`
  background-color: ${colors.lightBeige};
  padding: 64px 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

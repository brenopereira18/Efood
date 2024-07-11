import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

export const SectionRestaurants = styled.section`
  background-color: ${colors.lightBeige};
  padding: 80px 0;
`;

export const ContainerCard = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  text-decoration: none;
  list-style: none;

  @media (max-width: ${breakpoints.tablet}) {
    column-gap: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

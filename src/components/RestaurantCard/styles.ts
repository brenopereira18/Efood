import { ButtonContainer, ButtonLink } from "../Button/styles";
import { colors, breakpoints } from "../../styles";

import styled from "styled-components";

export const Card = styled.div`
  width: 472px;
  color: ${colors.orange};
  border: 1px solid ${colors.orange};
  position: relative;
  margin-bottom: 48px;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  p {
    padding-bottom: 16px;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 340px;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 8px;

  ${ButtonLink} {
    margin: 0;
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

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
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

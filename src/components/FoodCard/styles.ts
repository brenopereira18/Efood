import { styled } from "styled-components";
import { colors, breakpoints } from "../../styles";
import { ButtonLink } from "../Button/styles";

export const Card = styled.div`
  width: 320px;
  height: 100%;
  background-color: ${colors.orange};
  color: ${colors.lightBeige};
  padding: 8px;
  display: flex;
  flex-direction: column;

  img {
    width: 304px;
    height: 167px;
    cursor: pointer;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: none;

  &.visivel {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  width: 100%;
  height: 344px;
  padding: 32px;
  color: #fff;
  background-color: ${colors.orange};
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-height: 480px;
    height: 100%;    
  }
`;

export const Close = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;

  img {
    width: 16px;
    height: 16px;    
  }
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.mobile}) {
      height: 160px;
      width: 100%;
    }
  }

  h4 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
  }

  ${ButtonLink} {
    margin: 0;
  }
`;

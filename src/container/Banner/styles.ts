import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  div {
    position: relative;
    z-index: 1;
    color: white;
    font-size: 32px;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 156px;

    p {
      font-weight: 100;
    }
  }
`;

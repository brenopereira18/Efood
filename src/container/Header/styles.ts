import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.header`
  height: 360px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    text-align: center;
  }

  p {
    font-size: 36px;
    font-weight: bold;
    line-height: 42.19px;
    color: ${cores.laranja};
    margin-top: 120px;
  }
`;

export const Logo = styled.img`
  margin-top: 64px;
`;

export const RestaurantHeader = styled.div`
  height: 186px;
  text-align: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: ${cores.laranja};
    font-size: 18px;
    font-weight: bold;
    margin-top: 82px;
  }
`;

export const BannerContainer = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;    
  color: #fff;      
  position: relative;  

  &::before {
    content: '';
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
    z-index: 2;
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

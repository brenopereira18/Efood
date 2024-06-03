import styled from "styled-components";
import { cores } from "../../styles";

export const FooterContainer = styled.div`
  background-color: ${cores.bege};
  text-align: center;
  padding: 40px 0;
  color: ${cores.laranja};

  div {
    padding: 32px 0 60px 0;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  p {
    font-size: 10px;
  }
`;

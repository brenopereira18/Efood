import { styled } from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
  background-color: ${cores.laranja};
  color: #fff;
  padding: 4px 6px;
  margin: 0 0 8px 8px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
`;

export const ButtonContainer = styled.span`
  background-color: ${cores.laranja};
  color: #fff;
  padding: 4px 6px;
`;

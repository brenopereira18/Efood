import { styled } from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

import { Props } from ".";

export const ButtonLink = styled(Link)<Omit<Props, "type">>`
  background-color: ${(props) =>
    props.backgroundColor === "orange" ? colors.orange : colors.lightBeige};
  color: ${(props) =>
    props.backgroundColor === "orange" ? "#fff" : colors.orange};
  padding: ${(props) => (props.size === "small" ? "4px 6px" : "4px 82px")};
  margin: 0 0 8px 8px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonContainer = styled.span`
  background-color: ${colors.orange};
  color: #fff;
  padding: 4px 6px;
  font-size: 12px;
`;

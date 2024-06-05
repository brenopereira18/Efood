import { styled } from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

import { Props } from ".";

export const ButtonLink = styled(Link)<Omit<Props, 'type'>>`
  background-color: ${(props) => props.backgroundColor === 'laranja' ? cores.laranja : cores.begeClaro};
  color: ${(props) => props.backgroundColor === 'laranja' ? '#fff' : cores.laranja};
  padding: ${(props) => props.size === 'small' ? '4px 6px': '4px 82px'};
  margin: 0 0 8px 8px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonContainer = styled.span`
  background-color: ${cores.laranja};
  color: #fff;
  padding: 4px 6px;
  font-size: 12px;
`;

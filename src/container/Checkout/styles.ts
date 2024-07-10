import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonLink } from "../../components/Button/styles";

type InputGroupProps = {
  maxWidth?: string;
};

export const Container = styled.div`
  color: ${cores.bege};

  h4 {
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 16px;
  }

  ${ButtonLink} {
    margin-bottom: 8px;
  }
`;

export const ContainerField = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  max-width: ${(props) => props.maxWidth || "auto"};
`;

export const Form = styled.form`
  label {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  input {
    width: 100%;
    background-color: ${cores.bege};
    height: 32px;
    border: 1px solid ${cores.bege};
    padding: 16px 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.gray};

    &.error {
      border: 2px solid red;
    }
  }

  .buttonContainer {
    margin-top: 24px;
  }

  .addresContainer {
    display: flex;
    flex-direction: row;
    column-gap: 34px;

    div {      
      width: 100%;
    }
  }
`;

export const FinalizedPayment = styled.div`
  h4 {
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

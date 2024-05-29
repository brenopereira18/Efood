import { ButtonContainer, ButtonLink } from "./styles";

type Props = {
  type: "tag" | "link";
  children: string;
  to?: string;
};

const Button = ({ type, children }: Props) => {
  if (type === "tag") {
    return <ButtonContainer>{children}</ButtonContainer>;
  }

  return <ButtonLink>{children}</ButtonLink>;
};

export default Button;

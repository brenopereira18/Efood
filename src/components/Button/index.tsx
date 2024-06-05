import { ButtonContainer, ButtonLink } from "./styles";

type Props = {
  type: "tag" | "link";
  children: string;
  to?: string;
};

const Button = ({ type, children, to }: Props) => {
  if (type === "tag") {
    return <ButtonContainer>{children}</ButtonContainer>;
  }

  return <ButtonLink to={to as string}>{children}</ButtonLink>;
};

export default Button;

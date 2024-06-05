import { ButtonContainer, ButtonLink } from "./styles";

export type Props = {
  type: "tag" | "link";
  children: string;
  to?: string;
  size?: "small" | "big";
  backgroundColor?: "laranja" | "begeClaro";
};

const Button = ({
  type,
  children,
  to,
  size = "small",
  backgroundColor = "laranja",
}: Props) => {
  if (type === "tag") {
    return <ButtonContainer>{children}</ButtonContainer>;
  }

  return (
    <ButtonLink size={size} backgroundColor={backgroundColor} to={to as string}>
      {children}
    </ButtonLink>
  );
};

export default Button;

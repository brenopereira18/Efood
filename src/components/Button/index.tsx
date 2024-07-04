import { ButtonContainer, ButtonLink } from "./styles";

export type Props = {
  type: "tag" | "link";
  children: any;
  to?: string;
  size?: "small" | "big";
  backgroundColor?: "laranja" | "begeClaro";
  onClick?: () => void;
};

const Button = ({
  type,
  children,
  to,
  size = "small",
  backgroundColor = "laranja",
  onClick,
}: Props) => {
  if (type === "tag") {
    return <ButtonContainer>{children}</ButtonContainer>;
  }

  return (
    <ButtonLink
      onClick={onClick}
      size={size}
      backgroundColor={backgroundColor}
      to={to as string}
    >
      {children}
    </ButtonLink>
  );
};

export default Button;

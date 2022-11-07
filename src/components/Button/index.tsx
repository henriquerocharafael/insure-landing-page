import { StyledBtn } from "./styles";
import { AnchorHTMLAttributes } from "react";

// TODO: I have to refactor this button styles
interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode; // 👈️ type children
  href: string;
  bg: string;
  color: string;
  border: string;
  textColor: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledBtn
      bg={props.bg}
      color={props.color}
      border={props.border}
      textColor={props.textColor}
      href={props.href}
    >
      {props.children}
    </StyledBtn>
  );
};

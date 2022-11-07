import { StyledSection } from "./styles";

interface SectionProps {
  children?: React.ReactNode; // 👈️ type children
}

export const IntroSection: React.FC<SectionProps> = (props) => {
  return <StyledSection>{props.children}</StyledSection>;
};

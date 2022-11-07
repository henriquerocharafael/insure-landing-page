import { StyledMainSection } from "./styles";

interface MainSectionProps {
  children?: React.ReactNode; // 👈️ type children
}

export const MainSection: React.FC<MainSectionProps> = (props) => {
  return <StyledMainSection>{props.children}</StyledMainSection>;
};

import { StyledHeader } from "./styles";
import { Button } from "../Button";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src="../src/assets/logo.svg" alt="Logo Insure" />

      <img src="../src/assets/icon-hamburger.svg" className="hamburger" />

      <nav>
        <div>
          <a href="#">how we work</a>
          <a href="#">blog</a>
          <a href="#">account</a>
        </div>

        <Button
          href="#"
          bg="#2d2640"
          color="#fafafa"
          textColor="#2d2640"
          border="#2d2640"
        >
          view plans
        </Button>
      </nav>
    </StyledHeader>
  );
};

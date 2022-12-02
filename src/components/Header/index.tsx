import { StyledHeader } from "./styles";
import { Button } from "../Button";

import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo Insure" />

      <img src={hamburger} className="hamburger" />

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

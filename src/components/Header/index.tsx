import { StyledHeader } from "./styles";
import { Button } from "../Button";

import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
import bgPatterNav from "../../assets/bg-pattern-mobile-nav.svg";

import { useState } from "react";

export const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  function handleMenuState() {
    setMenuIsOpen(!menuIsOpen)

    // this disables body scrool when mobile menu is open
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  return (
    <StyledHeader>
      <img src={logo} alt="Logo Insure" />

      <img 
        onClick={handleMenuState} 
        src={menuIsOpen ? close : hamburger} 
        className="hamburger" 
      />

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

      {/* Todo: Use this line to disable overflow on menu open*/}
      {/*document.body.style.overflow = 'hidden';*/}
      <div className={`mobile-nav ${menuIsOpen ? 'open' : ''}`}>
        <div className="wrapper">
          <a href="#">how we work</a>
          <a href="#">blog</a>
          <a href="#">account</a>
          <Button
            href="#"
            border="#fafafa"
            textColor="#fafafa"
            bg="#fafafa"
            color="#2d2640"
            width="100%"
          >
            view plans
          </Button>
        </div>
        <img src={bgPatterNav} />
      </div>
    </StyledHeader>
  );
};

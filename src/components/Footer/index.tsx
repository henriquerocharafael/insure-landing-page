import { Wrapper } from "../../styles/Container";
import { FooterHeader, IconsHeader, StyledFooter } from "./styles";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterHeader>
          <img src="../src/assets/logo.svg" alt="" />

          <IconsHeader>
            <a href="#">
              <AiFillFacebook size={24} color="#837d87" />
            </a>
            <a href="#">
              <AiOutlineTwitter size={24} color="#837d87" />
            </a>
            <a href="#">
              <BsPinterest size={24} color="#837d87" />
            </a>
            <a href="#">
              <AiOutlineInstagram size={24} color="#837d87" />
            </a>
          </IconsHeader>
        </FooterHeader>
        <hr />
      </Wrapper>
    </StyledFooter>
  );
};

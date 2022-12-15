import { Button } from "../Button";
import { ColA, Colb, StyledIntro } from "./styles";

import desktopImg from "../../assets/image-intro-desktop.jpg";
import patternLeft from "../../assets/bg-pattern-intro-left-mobile.svg";
import patternRight from "../../assets/bg-pattern-intro-right-mobile.svg";

export const IntroSectionContent: React.FC = () => {
  return (
    <StyledIntro>
      <img className="pattern-left" src={patternLeft} />
      <img className="pattern-right" src={patternRight} />
      <ColA>
        <hr />
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and tecnology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <Button
          href="#"
          border="#fafafa"
          textColor="#fafafa"
          bg="#fafafa"
          color="#2d2640"
        >
          view plans
        </Button>
      </ColA>
      <Colb>
        <img className="desktopImg" src={desktopImg} alt="Happy Family Image" />
      </Colb>
    </StyledIntro>
  );
};

import { Button } from "../Button";
import { ColA, Colb, StyledIntro } from "./styles";

const DeskTopImg = "../src/assets/image-intro-desktop.jpg";
const MobileImg = "../src/assets/image-intro-mobile.jpg";

export const IntroSectionContent: React.FC = () => {
  return (
    <StyledIntro>
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
        <img className="desktopImg" src={DeskTopImg} alt="Happy Family Image" />
        <img className="mobileImg" src={MobileImg} alt="Happy Family Image" />
      </Colb>
    </StyledIntro>
  );
};

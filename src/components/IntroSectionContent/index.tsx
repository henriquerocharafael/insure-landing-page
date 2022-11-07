import { Button } from "../Button";
import { StyledIntro } from "./styles";

export const IntroSectionContent: React.FC = () => {
  return (
    <StyledIntro>
      <div>
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
      </div>
      <div>
        <img src="../src/assets/image-intro-desktop.jpg" alt="Happy Family Image" />
      </div>
    </StyledIntro>
  );
};

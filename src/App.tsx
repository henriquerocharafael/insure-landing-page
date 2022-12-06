import { Header } from "./components/Header";
import { BgImgIntroLeft, BgImgIntroRight, Wrapper } from "./styles/Container";
import { GlobalStyles } from "./styles/GlobalStyles";
import { IntroSection } from "./components/IntroSection";
import { IntroSectionContent } from "./components/IntroSectionContent";
import { MainSection } from "./components/MainSection";
import { MainSectionContent } from "./components/MainSectionContent";
import { Footer } from "./components/Footer";

import bgImgIntroLeft from "./assets/bg-pattern-intro-left-desktop.svg";
import bgImgIntroRight from "./assets/bg-pattern-intro-right-desktop.svg";
import mobileImg from "./assets/image-intro-mobile.jpg";

export function App() {
  return (
    <>
      <BgImgIntroLeft src={bgImgIntroLeft} />
      <BgImgIntroRight src={bgImgIntroRight} />

      <Wrapper>
        <Header />
      </Wrapper>
      <img className="mobileImg" src={mobileImg} alt="Happy Family Image" />

      <IntroSection>
        <Wrapper>
          <IntroSectionContent />
        </Wrapper>
      </IntroSection>

      <MainSection>
        <Wrapper>
          <MainSectionContent />
        </Wrapper>
      </MainSection>

      <Footer />
      <GlobalStyles />
    </>
  );
}

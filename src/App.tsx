import { Header } from "./components/Header";
import { BgImgIntroLeft, BgImgIntroRight, Wrapper } from "./styles/Container";
import { GlobalStyles } from "./styles/GlobalStyles";
import { IntroSection } from "./components/IntroSection";
import { IntroSectionContent } from "./components/IntroSectionContent";
import { MainSection } from "./components/MainSection";
import { MainSectionContent } from "./components/MainSectionContent";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <BgImgIntroLeft src="./src/assets/bg-pattern-intro-left-desktop.svg" />
      <BgImgIntroRight src="./src/assets/bg-pattern-intro-right-desktop.svg" />

      <Wrapper>
        <Header />
      </Wrapper>

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

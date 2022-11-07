import { Header } from "./components/Header";
import { Wrapper } from "./styles/Container";
import { GlobalStyles } from "./styles/GlobalStyles";
import { IntroSection } from "./components/IntroSection";
import { IntroSectionContent } from "./components/IntroSectionContent";
import { MainSection } from "./components/MainSection";
import { MainSectionContent } from "./components/MainSectionContent";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <GlobalStyles />
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
    </>
  );
}

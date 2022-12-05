import { Button } from "../Button";
import { StyledMainContent } from "./styles";

import iconSnappyProcess from "../../assets/icon-snappy-process.svg";
import iconAffordablePrices from "../../assets/icon-affordable-prices.svg";
import iconPeopleFirst from "../../assets/icon-people-first.svg";
import bgPattern from "../../assets/bg-pattern-how-we-work-desktop.svg";

export const MainSectionContent: React.FC = () => {
  return (
    <StyledMainContent>
      <hr />
      <h1>We're defferent</h1>
      <div className="card-container">
        <div>
          <img src={iconSnappyProcess} alt="" />
          <h3>Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </p>
        </div>
        <div>
          <img src={iconAffordablePrices} alt="" />
          <h3>Affordable Prices</h3>
          <p>
            We don't want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div>
          <img src={iconPeopleFirst} alt="" />
          <h3>People First</h3>
          <p>
            Our plans aren't full of conditions and clauses to prevent payouts.
            We make sure you're covered when you need it.
          </p>
        </div>
      </div>

      <div className="about-container">
        <img src={bgPattern} />
        <h1>Find out more about how we work</h1>
        <Button
          href="#"
          border="#fafafa"
          textColor="#fafafa"
          bg="#fafafa"
          color="#2d2640"
        >
          how we work
        </Button>
      </div>
    </StyledMainContent>
  );
};

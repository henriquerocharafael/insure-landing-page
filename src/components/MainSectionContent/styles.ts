import styled from "styled-components";

export const StyledMainContent = styled.main`
  margin: 18rem 0 9rem 0;

  hr {
    width: 9rem;
    border: 1px solid var(--grayish-blue);
    margin-bottom: 4rem;
  }

  h1 {
    color: var(--dark-violet);
    font-size: 4.2rem;
    line-height: 3.8rem;
    margin-bottom: 1.8rem;
    font-weight: 400;
  }

  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin: 5rem 0 8rem 0;

    h3 {
      font-family: "DM Serif Display", sans-serif;
      font-weight: 400;
      font-size: 2rem;
      color: var(--dark-violet);
      margin-top: 2rem;
    }

    p {
      color: var(--grayish-blue);
      font-weight: 700;
      line-height: 1.6rem;
      margin-top: 1.3rem;
    }
  }

  .about-container {
    background: var(--dark-violet);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 4rem;

    h1 {
      color: var(--very-light-gray);
      font-weight: 400;
      font-size: 3rem;
      width: 26.1rem;
      margin-bottom: 0;
    }
  }
`;

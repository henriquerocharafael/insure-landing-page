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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 5rem 0 8rem 0;
    justify-content: center;

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
    padding: 4rem;
    position: relative;
    z-index: 2;

    img {
      position: absolute;
      right: 0;
      z-index: -1;
    }

    h1 {
      color: var(--very-light-gray);
      font-weight: 400;
      font-size: 3rem;
      width: 26.1rem;
      margin-bottom: 0;
    }
  }

  @media (max-width: 575px) {
    margin: 11rem 0 9rem 0;

    hr {
      margin: 0 auto 4rem auto;
    }

    h1 {
      text-align: center;
      font-size: 2.8rem;
    }

    .card-container {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
      gap: 4rem;
    }

    .about-container {
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 3rem;
      padding: 4rem 2rem;

      img {
        display: none;
      }

      h1 {
        width: auto;
        font-size: 2.8rem;
        line-height: 2.7rem;
      }
    }
  }
`;

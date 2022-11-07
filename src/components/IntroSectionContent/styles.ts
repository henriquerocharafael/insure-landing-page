import styled from "styled-components";

export const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 6rem 0 8rem 0;
  gap: 1.5rem;

  div {
    position: relative;

    hr {
      width: 9rem;
      border: 1px solid var(--very-light-gray);
      margin-bottom: 4rem;
    }

    h1 {
      color: var(--very-light-gray);
      font-size: 4.2rem;
      line-height: 3.8rem;
      margin-bottom: 1.8rem;
      font-weight: 400;
    }

    p {
      font-size: 0.9rem;
      color: var(--very-light-gray);
      margin-bottom: 2.3rem;
      line-height: 1.6rem;
    }

    img {
      position: absolute;
      width: 100%;
    }
  }
`;

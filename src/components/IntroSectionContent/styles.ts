import styled from "styled-components";

export const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 6rem 0 8rem 0;
  gap: 1.5rem;

  .pattern-left {
    position: absolute;
    left: 0;
  }

  .pattern-right {
    position: absolute;
    right: 0;
    top: 947px;
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 0 8rem 0;

    /* This reverses the grid column order */
    div:nth-of-type(1) {
      order: 2;
    }

    hr {
      display: none;
    }
  }
`;

export const ColA = styled.div`
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

  @media (max-width: 575px) {
    text-align: center;

    h1 {
      font-size: 2.8rem;
    }
  }
`;

export const Colb = styled.div`
  position: relative;
  margin-bottom: 5.5rem;

  .desktopImg {
    position: absolute;
    width: 100%;
  }

  @media (max-width: 575px) {
    .desktopImg {
      display: none;
    }
  }
`;

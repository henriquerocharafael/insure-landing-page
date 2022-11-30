import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: #e4e3e6;
  padding: 3rem 0;
  position: relative;
  z-index: 2;

  .bg-image {
    position: absolute;
    top: 0;
    z-index: -1;
  }

  hr {
    border: 1px solid var(--grayish-blue);
    margin-bottom: 2.8rem;
  }

  @media (max-width: 575px) {
    .bg-image {
      display: none;
    }
  }
`;

export const FooterHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.8rem;

  @media (max-width: 575px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const IconsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    transition: 0.5s;
    &:hover {
      fill: var(--very-dark-violet);
    }
  }
`;

export const FooterBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  div {
    display: flex;
    flex-direction: column;
    letter-spacing: 0.1rem;

    span {
      text-transform: uppercase;
      font-weight: 700;
      color: var(--dark-grayish-violet);
      margin-bottom: 2.3rem;
    }

    a {
      color: var(--very-dark-violet);
      margin-bottom: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    gap: 1.5rem;
  }
`;

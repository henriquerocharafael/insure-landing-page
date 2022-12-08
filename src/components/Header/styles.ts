import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  position: relative;

  .hamburger {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    div {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      a {
        color: var(--grayish-blue);

        &:hover {
          transition: color 0.5s;
          color: var(--dark-violet);
        }
      }
    }
  }

  .mobile-nav {
    display: none;
  }

  @media (max-width: 575px) {
    height: 5rem;

    .hamburger {
      display: initial;
    }

    nav {
      display: none;
    }

    .mobile-nav {
      display: none;
      background-color: var(--very-dark-violet);
      color: #fff;
      position: absolute;
      top: 80px;
      left: -32px;
      right: -32px;
      height: 100vh;
      z-index: 10;
    
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        margin: 0 1.5rem;
        padding-top: 3rem;
      }
    
      a {
        color: var(--very-light-gray);
        font-size: 1.3rem;
      }
    }

    .open {
      display: block;
    }
  }
`;

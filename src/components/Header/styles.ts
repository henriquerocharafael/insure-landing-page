import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;

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
`;

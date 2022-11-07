import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: #dadae0;
  padding: 3rem 0;

  hr {
    border: 1px solid var(--grayish-blue);
    margin-bottom: 4rem;
  }
`;

export const FooterHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.8rem;
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

import styled from "styled-components";

type PropType = {
  bg: string;
  color: string;
  border: string;
  textColor: string;
  width?: string;
};

export const StyledBtn = styled.a<PropType>`
  border: 2px solid ${(props) => props.border};
  color: ${(props) => props.textColor};
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition: all 0.5s;
  width: ${(props) => props.width};
  text-align: center;

  &:hover {
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
  }
`;

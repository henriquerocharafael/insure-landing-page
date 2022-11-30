import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  max-width: 65rem;
  margin: 0 auto;

  @media (max-width: 575px) {
    margin: 0 2rem;
  }
`;

export const BgImgIntroLeft = styled.img`
  position: absolute;
  top: 476px;

  @media (max-width: 575px) {
    display: none;
  }
`;

export const BgImgIntroRight = styled.img`
  position: absolute;
  top: 63px;
  right: 0;
  z-index: 2;

  @media (max-width: 575px) {
    display: none;
  }
`;

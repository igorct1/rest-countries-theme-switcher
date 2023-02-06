import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
  from {
    transform: translate3d(-30px, 0, 0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const CountriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 8rem;

  animation: ${slideLeft} 0.2s forwards;
`;

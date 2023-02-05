import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0rem 2rem;
`;

export const Bg = styled.div`
  background: ${(props) => props.theme["background"]};
  width: 100vw;
  min-height: 100vh;
`;

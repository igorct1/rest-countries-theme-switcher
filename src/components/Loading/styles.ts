import styled, { keyframes } from "styled-components";

export const loader = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 7px solid ${(props) => props.theme["text"]};
  border-top: 7px solid rgba(0, 0, 0, 0.3);
  animation: ${loader} 1s linear infinite;
  margin: 2rem auto;
`;

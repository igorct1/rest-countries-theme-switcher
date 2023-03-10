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

export const CountryContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  animation: ${slideLeft} 0.2s forwards;
  button {
    border: none;
    background: none;
  }

  button > a {
    text-decoration: none;
    color: ${(props) => props.theme["text"]};
    gap: 1rem;
    background: ${(props) => props.theme["elements"]};
    padding: 1.6rem 3.2rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    flex-grow: 0;
  }
`;

export const CountrySection = styled.section`
  display: flex;
  gap: 10rem;
  padding-bottom: 4rem;
  img {
    overflow: hidden;
    object-fit: cover;
    width: 60rem;
    height: 45rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 8px;
  }

  @media (max-width: 1110px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    img {
      width: 100%;
      height: 50rem;
    }
  }

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    img {
      width: 100%;
      height: 30rem;
    }
  }
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-top: 4rem;

  > h2 {
    font-size: 3.2rem;
    color: ${(props) => props.theme["text"]};
    font-weight: 800;
  }

  @media (max-width: 560px) {
    margin-top: 2rem;
  }
`;

export const CountryInfoList = styled.div`
  display: flex;
  gap: 10rem;
  margin-top: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${(props) => props.theme["text"]};
    font-size: 1.6rem;
  }

  div strong {
    font-weight: 800;
  }

  div span {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;

  div {
    display: flex;
    gap: 2rem 1rem;
    flex-wrap: wrap;
  }

  h2 {
    color: ${(props) => props.theme["text"]};
    font-size: 1.6rem;
    min-width: 14rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["text"]};
    padding: 0.5rem 2.5rem;
    background: ${(props) => props.theme["elements"]};

    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }

  p {
    color: ${(props) => props.theme["text"]};
  }
`;

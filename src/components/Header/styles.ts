import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["elements"]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  > div {
    max-width: 144rem;
    margin: 0 auto;
    padding: 3rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    h1 {
      font-size: 2.6rem;
      color: white;
      font-weight: 800;
      color: ${(props) => props.theme["text"]};
    }
    button {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      background: none;
      border: none;
      border-radius: 8px;
      color: ${(props) => props.theme["text"]};
      cursor: pointer;
      border: 1px solid transparent;
      padding: 0.5rem 1rem;
      font-weight: 600;
      font-size: 1.6rem;
      opacity: 0.8;
    }

    button > svg {
      margin-top: -0.2rem;
    }

    button:hover {
      opacity: 1;
    }
  }
`;

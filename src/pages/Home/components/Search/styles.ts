import styled, { keyframes } from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 740px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InputContainer = styled.div`
  background: ${(props) => props.theme["elements"]};

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 8px;
  width: 45rem;

  @media (max-width: 740px) {
    width: 100%;
  }

  label {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.6rem 3.2rem;
    cursor: pointer;
  }

  input {
    background: none;
    border: none;
    outline: none;
    color: ${(props) => props.theme["text"]};
    font-weight: 600;
  }

  input::placeholder {
    color: ${(props) => props.theme["text"]};
    opacity: 0.5;
  }

  svg {
    color: ${(props) => props.theme["text"]};
  }
`;

export const FilterContainer = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  cursor: pointer;
  border-radius: 8px;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme["elements"]};
  color: ${(props) => props.theme["text"]};
  padding: 1.6rem 3.2rem;
  font-weight: 400;
  font-size: 1.4rem;

  gap: 4rem;
  cursor: pointer;
`;

const slideDown = keyframes`
  from {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const FilterList = styled.ul`
  position: absolute;
  list-style: none;
  background: ${(props) => props.theme["elements"]};
  color: ${(props) => props.theme["text"]};
  padding: 1.6rem;
  border-radius: 8px;
  animation: ${slideDown} 0.2s forwards;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 5000;
  top: 6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  li {
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 400;
  }

  li:hover {
    opacity: 0.8;
  }
`;

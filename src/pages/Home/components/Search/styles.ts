import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const InputContainer = styled.div`
  background: ${(props) => props.theme["elements"]};

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 8px;
  width: 45rem;

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
    margin-top: 0.2rem;
  }
  input::placeholder {
    color: ${(props) => props.theme["text"]};
  }

  svg {
    color: ${(props) => props.theme["text"]};
  }
`;

export const FilterContainer = styled.div``;

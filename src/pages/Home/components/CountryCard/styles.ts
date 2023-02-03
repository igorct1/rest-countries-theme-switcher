import styled from "styled-components";

export const CardContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  cursor: pointer;

  background: ${(props) => props.theme["elements"]};

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  &:hover {
    opacity: 0.7;
  }

  img {
    object-fit: cover;
    height: 20rem;
    overflow: hidden;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 4rem;

  color: ${(props) => props.theme["text"]};
`;

export const CardList = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

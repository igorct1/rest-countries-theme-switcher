import { MagnifyingGlass } from "phosphor-react";
import { InputContainer } from "./styles";

export function Input() {
  return (
    <InputContainer>
      <label htmlFor="search">
        <MagnifyingGlass size={18} />
        <input type="text" placeholder="Search for a country..." id="search" />
      </label>
    </InputContainer>
  );
}

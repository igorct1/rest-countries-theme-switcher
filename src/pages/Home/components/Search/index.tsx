import { FilterContainer, SearchContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { InputContainer } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <InputContainer>
        <label htmlFor="search">
          <MagnifyingGlass size={18} />
          <input
            type="text"
            placeholder="Search for a country..."
            id="search"
          />
        </label>
      </InputContainer>
      <FilterContainer>
        <h1>Filter</h1>
      </FilterContainer>
    </SearchContainer>
  );
}

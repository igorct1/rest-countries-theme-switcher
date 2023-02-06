import {
  FilterButton,
  FilterContainer,
  FilterList,
  SearchContainer,
} from "./styles";
import { CaretDown, MagnifyingGlass } from "phosphor-react";
import { InputContainer } from "./styles";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../contexts/GlobalContext";

export function Search() {
  const [regionActive, setRegionActive] = useState(false);
  const { changeRegion, searchCountry, search } = useContext(GlobalContext);

  function handleRegion(event: React.MouseEvent<HTMLLIElement>) {
    const value = event.currentTarget.getAttribute("value");
    if (value) {
      changeRegion(value);
    }
  }

  function handleNewSearch(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    searchCountry(value);
  }

  return (
    <SearchContainer>
      <InputContainer>
        <label htmlFor="search">
          <MagnifyingGlass size={18} />
          <input
            type="text"
            placeholder="Search for a country..."
            id="search"
            onChange={handleNewSearch}
            value={search}
            autoComplete="off"
          />
        </label>
      </InputContainer>
      <FilterContainer onClick={() => setRegionActive((state) => !state)}>
        <FilterButton>
          Filter by Region
          <CaretDown size={20} />
        </FilterButton>
        {regionActive && (
          <FilterList>
            <li onClick={handleRegion} value="all">
              All
            </li>
            <li onClick={handleRegion} value="africa">
              Africa
            </li>
            <li onClick={handleRegion} value="americas">
              Americas
            </li>
            <li onClick={handleRegion} value="asia">
              Asia
            </li>
            <li onClick={handleRegion} value="europe">
              Europe
            </li>
            <li onClick={handleRegion} value="oceania">
              Oceania
            </li>
          </FilterList>
        )}
      </FilterContainer>
    </SearchContainer>
  );
}

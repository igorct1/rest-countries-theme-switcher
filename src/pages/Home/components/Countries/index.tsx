import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import { CountryCard } from "../CountryCard";
import { CountriesContainer } from "./styles";

export function Countries() {
  const { data } = useContext(GlobalContext);
  return (
    <CountriesContainer>
      {data.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </CountriesContainer>
  );
}

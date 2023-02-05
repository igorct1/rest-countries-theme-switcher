import { useContext } from "react";
import { Loading } from "../../../../components/Loading";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import { CountryCard } from "../CountryCard";
import { CountriesContainer } from "./styles";

export function Countries() {
  const { data, loading } = useContext(GlobalContext);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CountriesContainer>
          {data.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </CountriesContainer>
      )}
    </>
  );
}

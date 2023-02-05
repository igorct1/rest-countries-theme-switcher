import { useNavigate } from "react-router-dom";
import { Country } from "../../../../contexts/GlobalContext";
import { CardContainer, CardInfo, CardList } from "./styles";

interface CountryProps {
  country: Country;
}

export function CountryCard({ country }: CountryProps) {
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`${country.alpha2Code}`)}>
      <img src={country.flags.svg} alt="" />
      <CardInfo>
        <h2>{country.name}</h2>
        <CardList>
          <li>
            <strong>Population: </strong>
            {country.population.toLocaleString("pt-br")}
          </li>
          <li>
            <strong>Region: </strong>
            {country.region}
          </li>
          <li>
            <strong>Capital: </strong>
            {country.capital}
          </li>
        </CardList>
      </CardInfo>
    </CardContainer>
  );
}

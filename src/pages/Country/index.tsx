import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { Country } from "../../contexts/GlobalContext";
import { api } from "../../libs/axios";
import {
  BorderContainer,
  CountryContainer,
  CountryInfo,
  CountryInfoList,
  CountrySection,
} from "./styles";

interface CountryDetails extends Country {
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: [];
  borders: [];
  languages: [];
}

export function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState<CountryDetails>({} as CountryDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDataByName() {
      if (name) {
        try {
          setLoading(true);
          const response = await api.get(`alpha/${name}`);
          if (response.status) {
            setCountry(response.data);
          }
        } finally {
          setLoading(false);
        }
      }
    }
    fetchDataByName();
  }, [name]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CountryContainer>
          <button>
            <Link to="/">
              <ArrowLeft />
              Back
            </Link>
          </button>

          <CountrySection>
            <img src={country.flags.svg} alt="" />
            <CountryInfo>
              <h2>{country.name}</h2>
              <CountryInfoList>
                <div>
                  <span>
                    <strong>Native Name: </strong>
                    {country.nativeName}
                  </span>
                  <span>
                    <strong>Population: </strong>
                    {country.population.toLocaleString("pt-br")}
                  </span>
                  <span>
                    <strong>Region: </strong>
                    {country.region}
                  </span>
                  <span>
                    <strong>Sub Region: </strong>
                    {country.subregion}
                  </span>
                  <span>
                    <strong>Capital: </strong>
                    {country.capital}
                  </span>
                </div>
                <div>
                  <span>
                    <strong>Top Level Domain: </strong>
                    {country.topLevelDomain}
                  </span>
                  <span>
                    <strong>Currencies: </strong>
                    {country.currencies &&
                      country.currencies.map((currency: any) => (
                        <p key={currency.code}>{currency.code}</p>
                      ))}
                  </span>
                  <span>
                    <strong>Languages: </strong>
                    {country.languages &&
                      country.languages.map((language: any) => (
                        <p key={language.iso639_1}>{language.iso639_1}</p>
                      ))}
                  </span>
                </div>
              </CountryInfoList>
              <BorderContainer>
                <h2>Border Countries: </h2>
                <div>
                  {country.borders ? (
                    country.borders.map((border: any) => (
                      <Link key={border} to={`/${border}`}>
                        {border}
                      </Link>
                    ))
                  ) : (
                    <p>No data found...</p>
                  )}
                </div>
              </BorderContainer>
            </CountryInfo>
          </CountrySection>
        </CountryContainer>
      )}
    </>
  );
}

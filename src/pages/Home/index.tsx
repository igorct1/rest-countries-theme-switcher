import { Countries } from "./components/Countries";
import { Search } from "./components/Search";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Search />
      <Countries />
    </HomeContainer>
  );
}

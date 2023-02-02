import { Input } from "./Input";
import { HomeContainer, SearchContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <SearchContainer>
        <Input />
      </SearchContainer>
    </HomeContainer>
  );
}

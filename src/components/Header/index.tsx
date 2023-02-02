import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { HeaderContainer } from "./styles";
import { Moon, Sun } from "phosphor-react";

export function Header() {
  const { theme, toggleTheme } = useContext(GlobalContext);
  function onToggleTheme() {
    toggleTheme();
  }

  return (
    <HeaderContainer>
      <div>
        <h1>Where in the World?</h1>
        <button onClick={onToggleTheme}>
          {theme ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </HeaderContainer>
  );
}

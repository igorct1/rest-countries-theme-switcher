import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Bg, LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <Bg>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </Bg>
  );
}

import { ReactNode } from "react";
import { Header, Main, StyledLink } from "../styledComponents/Layout.styled";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header>
        <StyledLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration: isActive ? "underline" : "",
              textDecorationThickness: isActive ? "3px" : "",
            };
          }}
        >
          Formulario
        </StyledLink>
        <StyledLink
          to="/list"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration: isActive ? "underline" : "",
              textDecorationThickness: isActive ? "3px" : "",
            };
          }}
        >
          Lista formulario
        </StyledLink>
      </Header>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  height: 90px;
  width: auto;
  display: flex;
  gap: 10px;
  padding-right: 10px;
  justify-content: end;
  align-items: center;
  box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.2);
  border-bottom: 0px solid;
`;

export const StyledLink = styled(NavLink)`
  font-size: 13px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  text-underline-offset: 6px;
  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    margin-right: 45px;
    color: #002eff;
  }
`;

export const Main = styled.main`
  padding-top: 30px;
`;

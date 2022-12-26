import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/authContext";

export default function NavBar({ children }) {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.clear();
    navigate("/")
  }

  return (
    <NavStyle>
      {children}
      {token && <a onClick={handleLogout}>Sair</a>}
    </NavStyle>
  );
}

const NavStyle = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  font-weight: 400;
  width: 1025px;
  display: flex;
  color: #9c9c9c;
  justify-content: flex-end;
  margin: 70px auto;
  span {
    margin-right: 38rem;
    color: #5d9040;
  }
  a {
    margin-left: 27px;
    color: #9c9c9c;

    &:hover {
      color: #5d9040;
      cursor: pointer;
    }
  }
`;

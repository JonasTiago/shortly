import styled from "styled-components";

export default function NavBar({ children }) {
  return <NavStyle>{children}</NavStyle>;
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
    margin-right: 600px;
    color: #5d9040;
  }
  a {
    margin-left: 27px;
    color: #9c9c9c;
  }
`;

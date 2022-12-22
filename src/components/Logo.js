import styled from "styled-components";
import LOGOSVG from "./../assets/img/Vector.svg" 

export default function Logo() {
  return (
    <LogoStyle>
      <h1>Shortly</h1>
      <img src={LOGOSVG} alt="fdsfsd" />
    </LogoStyle>
  );
}

const LogoStyle = styled.div`

    margin:auto;
    display:flex;
    align-items:center;
    h1{
      font-size:4em;
      text-align:center;
    }
`

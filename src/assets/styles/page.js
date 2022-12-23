import styled from "styled-components";

const PageStyel = styled.div`
  margin: 60px 171px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Lexend Deca", sans-serif;

  section {
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    > p {
      font-size: 36px;
      font-weight: 700;
    }
  }
`;

export default PageStyel;

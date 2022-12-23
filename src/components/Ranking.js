import styled from "styled-components";

export default function Ranking() {
  return (
    <RankingStyele>
      <h2> &#127942; Ranking</h2>
      <div>
        <p>1. usuario - 0 links - 0 visualizações</p>
        <p>1. usuario - 0 links - 0 visualizações</p>
        <p>1. usuario - 0 links - 0 visualizações</p>
        <p>1. usuario - 0 links - 0 visualizações</p>
        <p>1. usuario - 0 links - 0 visualizações</p>
      </div>
    </RankingStyele>
  );
}

const RankingStyele = styled.div`
  margin-bottom: 80px;
  font-family: "Lexend Deca", sans-serif;
  
  > h2 {
    font-size: 36px;
    margin: 57px auto;
    text-align: center;
    font-weight: 700;
  }

  > div {
    width: 1017px;
    height: 241px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    padding: 19px 40px;

    > p {
      font-size: 22px;
      margin: 15px 0;
      font-weight: 500;
    }
  }
`;

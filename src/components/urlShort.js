import styled from "styled-components";
import Trash from "./../assets/img/tr.svg";

export default function UrlShort() {
  return (
    <ShortStyle>
      <div>
        <p>https://www.driven.com.br</p>
        <p>e4231A</p>
        <p>Quantidade de visitantes: 271</p>
      </div>
      <button>
        <img src={Trash} alt="deletar" />
      </button>
    </ShortStyle>
  );
}

const ShortStyle = styled.div`
font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  width: 1020px;
  height: 62px;
  margin-bottom:40px;

  > div {
    width: 887px;
    height: 60px;
    background-color: #80cc74;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 94px 10px 20px;

    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;

    p {
      color: #fff;
      font-weight:400;
    }
  }

  button {
    width: 130px;
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    border:none;
  }
`;

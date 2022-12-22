import styled from "styled-components";

export default function Form({ children }) {
  return <FormStyle>{children}</FormStyle>;
}

const FormStyle = styled.form`
  margin: 58px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  input[type=text] {
    width: 769px;
    height: 60px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    padding: 10px 20px;
    margin-bottom: 25px;
    font-size: 18px;

    &::placeholder {
      font-size: 18px;
    }
  }

  input[type=submit] {
    width:182px;
    height:60px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    background-color:#5D9040;
    color:#fff;
    margin:50px auto;
  }

  div{
    >input{
      margin-right:69px;
    }
  }
`;

import styled, { createGlobalStyle } from "styled-components";
import card from "../img/pergaminho.png";
import fundo from "../img/pedras.jpg";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-image: url(${fundo});
}
h1{
  color: brown;
  text-align: center;
}
section{
  margin: 10px;
  display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}

`;

export const Card = styled.div`
  width: 350px;
  height: 470px;

  background-image: url(${card});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  margin: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style: none;
    margin: 5px;
  }

  img {
    width: 200px;
    height: 250px;
    object-fit: cover;
  }
  h2 {
    position: relative;
    top: 65px;
  }
  div {
    position: relative;
    top: 70px;
    background-color: transparent;
  }
`;

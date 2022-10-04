import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./global/Styles";
import { GlobalStyle } from "./global/Styles";

export default function App() {
  let Api = "https://hp-api.herokuapp.com/api/characters";

  const [personagem, setPersonagem] = useState([]);

  useEffect(() => {
    axios.get(Api).then((response) => {
      console.log(response.data);
      setPersonagem(response.data.slice(0, 23));
    });
  }, [Api]);
  return (
    <body>
      <GlobalStyle />
      <h1>Mal feito, feito!</h1>
      <section>
        {personagem.map((item) => (
          <S.Card>
            <h2>{item.name}</h2>
            <div>
              <img src={item.image} alt={item.name} />
              <ul>
                <li>
                  <strong>Gênero:</strong> {item.gender}
                </li>
                <li>
                  <strong>Casa:</strong> {item.house}
                </li>
                <li>
                  <strong>Ator:</strong> {item.actor}
                </li>
              </ul>
            </div>
          </S.Card>
        ))}
      </section>
    </body>
  );
}

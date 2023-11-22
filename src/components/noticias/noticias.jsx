import React, { useState, useEffect } from "react";
import axios from "axios";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const apiKey = "5c7e01103dcb4414b58f1bef01ea346d";
  const apiUrl = `https://newsapi.org/v2/everything?q=gastronomia&from=2023-11-10&sortBy=popularity&apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNoticias(response.data.articles);
      })
      .catch((error) => {
        console.error("Erro ao buscar notícias:", error);
      });
  }, []);

  return (
    <div>
      <h2>Notícias</h2>
      <ul className="fs-3">
        {noticias.map((noticia, index) => (
          <li key={index}>
            <a href={noticia.url} target="_blank" rel="noopener noreferrer">
              {noticia.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Noticias;
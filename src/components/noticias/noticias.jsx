import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
import Menu from "../menu/menu"
import Busca from "../busca/busca"
=======
import Menu from "../menu/menu";
import Busca from "../busca/busca";
>>>>>>> 2bd399205e9d84aef9351f1613453f6004dbd9a0

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
<<<<<<< HEAD

    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <Menu page="negocio" />
=======
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <Menu page="noticias" />
>>>>>>> 2bd399205e9d84aef9351f1613453f6004dbd9a0
        </div>

        <div className="col py-3 me-3">
          <div className="mb-5">
            <Busca texto="Busca por Negócios" />
          </div>

<<<<<<< HEAD
          <div className="bg-white p-4 rounded-4 border">

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
=======
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

>>>>>>> 2bd399205e9d84aef9351f1613453f6004dbd9a0
          </div>

          <div className="row">

          </div>
        </div>
      </div>
    </div>







  );
}

export default Noticias;
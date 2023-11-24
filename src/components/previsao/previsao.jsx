import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../menu/menu";
import Busca from "../busca/busca";

const Previsao = () => {
  const [previsao, setPrevisao] = useState(null);
  const apiKey = "67bf74eb4a026db40b800245c2570de0";

  useEffect(() => {
    const cidade = "Votuporanga";
    const pais = "br";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setPrevisao(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar previsão do tempo:", error);
      });
  }, []);

  if (!previsao) {
    return <div>Carregando...</div>;
  }

  return (
<<<<<<< HEAD
      <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <Menu page="negocio" />
            </div>

            <div className="col py-3 me-3">
                <div className="mb-5">
                    <Busca texto="Busca por Negócios" />
                </div>

               
               <div className="bg-white p-4 rounded-4 border">

                <div>
                  <h2>Previsão do Tempo</h2>
                  <p>Cidade: {previsao.name}</p>
                  <p>Temperatura: {Math.round(previsao.main.temp-273.15)} °C</p>

                  <p>Condição: {previsao.weather[0].description}</p>
                  </div>
                </div>

                <div className="row">

                </div>
            </div>
        </div>
=======

    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <Menu page="previsao" />
        </div>

        <div className="col py-3 me-3">
          <div className="mb-5">
            <Busca texto="Busca por Negócios" />
          </div>

          <div>
          
      <h2>Previsão do Tempo</h2>
      <p>Cidade: {previsao.name}</p>
      <p>Temperatura: {Math.round(previsao.main.temp-273.15)} °C</p>

      <p>Condição: {previsao.weather[0].description}</p>
        </div>

          <div className="row">

          </div>
        </div>
      </div>
>>>>>>> 2bd399205e9d84aef9351f1613453f6004dbd9a0
    </div>





<<<<<<< HEAD











 
=======
   
>>>>>>> 2bd399205e9d84aef9351f1613453f6004dbd9a0
  );
};

export default Previsao;
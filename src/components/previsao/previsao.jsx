import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h2>Previsão do Tempo</h2>
      <p>Cidade: {previsao.name}</p>
      <p>Temperatura: {Math.round(previsao.main.temp-273.15)} °C</p>

      <p>Condição: {previsao.weather[0].description}</p>
    </div>
  );
};

export default Previsao;
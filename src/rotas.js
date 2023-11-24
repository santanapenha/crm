import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Noticias from "./components/noticias/noticias";
import Previsao from "./components/previsao/previsao";
import Negocio from "./pages/negocio/negocio";
<<<<<<< HEAD
=======

>>>>>>> 2bd399205e9d84aef9351f1613453f6004dbd9a0

function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element= {<Dashboard />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/noticias" element={<Noticias/>} />
            <Route path="/previsao" element={<Previsao/>} />
            <Route path="/negocio" element={<Negocio/>} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;
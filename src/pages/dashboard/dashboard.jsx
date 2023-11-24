import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";
import logo from "../../assets/logo.png";
import Indicador from "../../components/indicador/indicador.jsx";
import Grafico from "../../components/grafico/grafico.jsx";


<<<<<<< HEAD

=======
>>>>>>> 2bd399205e9d84aef9351f1613453f6004dbd9a0
function Dashboard() {
    return <>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu page="dashboard" />
                </div>

                <div className="col py-3 me-3">
                    <div className="mb-5">
                        <Busca texto="Busca por Negócios" />
                    </div>

                    <div className="d-flex justify-content-between">
                        <h1>Dashboard...</h1>
                        <button className="btn btn-primary ms-4">Atualizar</button>
                    </div>

            

                    <div className="row">

                        <div className="col-md-3 mt-4">
                            <Indicador titulo="Negócios do Mês"
                                valor="R$19.000,00"
                                rodape="12 atividades" />
                        </div>

                        <div className="col-md-3 mt-4">
                            <Indicador titulo="Atividades para Hoje"
                                valor="6 atividades"
                                rodape="R$3.150,00" />
                        </div>

                        <div className="col-md-12 mt-5">
                            <Grafico titulo="Vendas Anual"
                                chartType="Line" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Dashboard;

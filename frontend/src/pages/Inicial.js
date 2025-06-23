import ProdutoList from "../components/ProdutoList"
import ClienteList from "../components/ClienteList"
import Layout from "../styles/Layout.css"
import Alpha_logo from "../assets/Alpha_logo.jpg";

function Inicial() {

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={Alpha_logo} alt="logo" className="logo" />
                <h2>Projeto Alpha</h2>
                <button type="button" onClick={() => window.location.href = "/produtos"}>Produtos</button>
                <button type="button" onClick={() => window.location.href = "/clientes"}>Clientes</button>
            </div>
        </div>
    )
}

export default Inicial
import "./Cadastro.css";
import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <div className="Container">
            <div className="title">
                <h1>Cadastro</h1>
                <div className="cadastro">

                    <input type="name" placeholder="Nome" className="nome"></input>
                    <input type="tel" placeholder="CPF" className="cpf"></input>
                    <input type="email" placeholder="E-mail" className="email"></input>
                    <input type="password" placeholder="Senha" className="senha"></input>
                    <input type="password" placeholder="Confirme sua senha" className="senha"></input>
                    <Link to="profile">
                    <button className="buttonlc">Cadastrar</button>
                    </Link>
                    
            </div>
            </div>


            <div className="vectors">
                 <img className="vector" src="component.svg" alt=""></img>
            </div>

            

        </div>

        );
    }
    
    export default Cadastro;
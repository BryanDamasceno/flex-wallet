import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (

        <div className="Container">
            <div className="title">
                <h1>Login</h1>
                <div className="login">
                    <input type="email" placeholder="E-mail" className="email"></input>
                    <input type="password" placeholder="Senha" className="senha"></input>
                    <label>Esqueceu sua senha?</label>
                    <input type="submit" name="acao" value="Login"></input>
            </div>
            </div>


            <div className="vectors">
                 <img className="vector" src="component.svg" alt=""></img>
            </div>

            

        </div>
        );
}

export default Login;
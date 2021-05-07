import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="title">
        <h1>Flex Wallet</h1>
        <p>Uma forma fácil e descontraída de organizar suas finanças.</p>
      </div>

      <div className="content">

        <div className="caroussel">

      <input type="radio" class="slide-controller" name="slide" ></input>
      <input type="radio" class="slide-controller" name="slide" ></input>
      <input type="radio" class="slide-controller" name="slide" ></input>
      <input type="radio" class="slide-controller" name="slide" ></input>

          <ul class="slider">
            <li class ="slide">
              <img src="img1.png" alt="" />
            </li>
            <li class ="slide">
              <img src="img2.jpg" alt=""  />
            </li>
            <li class ="slide">
              <img src="img3.jpg" alt=""  />
            </li>
            <li class ="slide">
              <img src="img4.png" alt=""  />
            </li>
          </ul>
        </div>

        <div className="register">
          <Link to="cadastro">
            <button className="button">Cadastre-se</button>
          </Link>
          <Link to="login">
            <button className="button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

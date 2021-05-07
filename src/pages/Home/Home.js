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

      <input type="radio" class="slide-controller" name="slide" id="slide0"></input>
 
      <input type="radio" class="slide-controller" name="slide" id="slide1"></input>
    
      <input type="radio" class="slide-controller" name="slide" id="slide2"></input>
      
      <input type="radio" class="slide-controller" name="slide" id="slide3"></input>
      

          <ul class="slider">
            <li class ="slide">
            <label for="slide0" class="inputlabel"></label>
              <img src="img1.png" alt="" />
            </li>
            <li class ="slide">
            <label for="slide1" class="inputlabel"></label>
              <img src="img2.jpg" alt=""  />
            </li>
            <li class ="slide">
            <label for="slide2" class="inputlabel"></label>
              <img src="img3.jpg" alt=""  />
            </li>
            <li class ="slide">
            <label for="slide3" class="inputlabel"></label>
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

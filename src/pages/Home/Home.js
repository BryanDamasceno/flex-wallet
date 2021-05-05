import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="title">
        <h1>Flex Wallet</h1>
        <p>Uma forma fácil e descontraída de organizar suas finanças.</p>
      </div>

      <div className="Caroussel"></div>
      
      <div className="register">
        <button class="button">Cadastre-se</button>
        <button class="button">Login</button>
      </div>     
    </div>
  );
}

export default Home;

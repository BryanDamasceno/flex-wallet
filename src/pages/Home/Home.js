import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


var counter = 1;
          setInterval(function(){
          document.getElementById('radio' + counter).checked = true;
          counter ++;
         if(counter > 4){
         counter = 1
          }
        }, 5000);

function Home() {
  return (
    <div className="container">

          <div className="header">
           <img className="vectorgreen" src="vectorgreen.svg" alt=""></img>
           <img className="vectorblue"  src="vectorblue.svg"  alt=""></img>
           

      <div className="title">
        <h1>Flex Wallet</h1>
        <p>Uma forma fácil e descontraída de organizar suas finanças.</p>
      </div>
      </div>
      <div className="content">
       <div class="caroussel">
        <div class="slider">
          <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"></input>
            <input type="radio" name="radio-btn" id="radio2"></input>
            <input type="radio" name="radio-btn" id="radio3"></input>
            <input type="radio" name="radio-btn" id="radio4"></input>

            <div class="slide first">
            <img src="img1.png" alt=""></img>
            </div>
            <div class="slide">
            <img src="img2.jpg" alt=""></img>
            </div>
            <div class="slide">
            <img src="img3.jpg" alt=""></img>
            </div>
            <div class="slide">
            <img src="img4.png" alt=""></img>
            </div> 
            <div class="navigation-auto">
              <div class="auto-btn1"></div>
              <div class="auto-btn2"></div>
              <div class="auto-btn3"></div>
              <div class="auto-btn4"></div>
            </div>
          </div>
          <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
          </div>
        </div>
       
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

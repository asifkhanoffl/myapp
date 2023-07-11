import React from "react";
import "./progect/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Mycomponant() {
  return (
    <header class="home container-fluid" id="header">
      <div class="container">
        <div class="col nav__logo">
          <a href="#" class="nav__logos">
            Holux<i class="bx bxs-home-alt-2"></i>
          </a>
        </div>
        <div class="col nav__menu ">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">
                <i class="bx bx-home-alt-2"></i>
                <span>Home</span>
              </a>
            </li>
            <li class="nav__item">
              <a href="#popular" class="nav__link">
                <i class="bx bx-building-house"></i>
                <span>Residences</span>
              </a>
            </li>
            <li class="nav__item">
              <a href="#value" class="nav__link">
                <i class="bx bx-award"></i>
                <span>Value</span>
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">
                <i class="bx bx-phone"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col nav__button">
          <a href="#" class="button nav__buttons">
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}

export default Mycomponant;

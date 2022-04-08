import React, { Component } from "react";
import Pomme from './img/pomme_logo.png'



class Burger extends Component{
  render(){
      return(
            <div>
            <div class="">
              <div className="menubord2">
                <a href="/burger" class="link-light">
                   <h3 class="mb50" className='popo'><span class="heading-font text-uppercase">Burgers</span></h3>
                </a>
                <h4>Crispy Bacon <span class="theme-accent-color">19.00€</span></h4>
                <p>Charolais beef 200gr, cheddar, bacon, oignons frits, sauce maison, salade & tomate. accompagné de frites</p>
                <h4>L'original <span class="theme-accent-color">16.00€</span></h4>
                <p>Charolais beef 200gr, cheddar, sauce maison, salade & tomate. accompagné de frites</p>
                <h4>Black Pepper <span class="theme-accent-color">20.00€</span></h4>
                <p>Charolais beef 200gr, poivre concassés, cheddar, sauce au poivre, oignons frits, Black bun, salade & tomate. accompagné de frites</p>
                <h4>Dikkenek <span class="theme-accent-color">20.00€</span></h4>
                <p>Charolais beef 200gr, fromage maredsous, sauce dallas, oignons caramélisés, salade & tomate. accompagné de frites</p>
              </div>
            </div>
            </div>
      )
  }

}

export default Burger
import React, { Component } from "react";
import data from "../data.json";
import spagh from './img/spagh.png'
import viande from './img/viande.png'
import burger from './img/burger.png'


class Menu extends Component{
  
  render(){
      return(
        <div class="container">
          <h1 className="titreMe">MENU</h1>

          <div class="row mb100">
            <div class="col-md-4 wow fadeIn">
              <div className="menubord">
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
              <a href="/burger" class="link-light">
              <img src={burger} width='100%' height='14%' className="imgM"></img>
              </a>
 
            </div>

            <div class="col-md-4 wow fadeIn">
              <div className="menubord">
                 <h3 class="mb50" className='popo'><span class="heading-font text-uppercase">Viandes</span></h3>
                <h4>Américain frite <span class="theme-accent-color">18.00€</span></h4>
                <p>Tartare de viande angus préparé minute. accompagné de salade et frites.</p>
                <h4>Filet mignon <span class="theme-accent-color">16.00€</span></h4>
                <p>Hereford beef irlande 250gr. accompagné de salade & frites.</p>
                <h4>Vol au vent de poulet aux pleurotes <span class="theme-accent-color">19.00€</span></h4>
                <p>Vol au vent de poulet cuit en basse température. accompagné de frites.</p>
                <h4>Tartare à l'italienne <span class="theme-accent-color">18.50€</span></h4>
                <p>Tartare de de bœuf (Angus Irlande), basilic, pignons de pin, parmesan DOP. Accompagné de frites.</p>
              </div>
              <img src={viande} width='100%' height='18%' className="imgM"></img>
            </div>

            <div class="col-md-4 wow fadeIn">
              <div className="menubord">
                <h3 class="mb50" className="popo"><span class="heading-font text-uppercase">Pates fraîches</span></h3>
                <h4>Spaghettis bolognaise <span class="theme-accent-color">12.50€</span></h4>
                <p>Pur boeuf.</p>
                <h4>Spaghettis jambon/crème <span class="theme-accent-color">12.50€</span></h4>
                <p></p>
                <h4>Spaghettis lardons, jaune d'œuf, crème <span class="theme-accent-color">13.50€</span></h4>
                <p></p>
                <h4>Tagliatelles aux gambas d'argentine <span class="theme-accent-color">18.00€</span></h4>
                <p></p>
              </div>
              <img src={spagh} width='100%' height='24%' className="imgM2"></img>
            </div>

            <div class="col-md-4 wow fadeIn">
              <div className="menubord">
                 <h3 class="mb50" className='popo'><span class="heading-font text-uppercase">Pates fraîches</span></h3>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
              </div>
            </div>

            <div class="col-md-4 wow fadeIn">
              <div className="menubord">
                 <h3 class="mb50" className='popo'><span class="heading-font text-uppercase">Pates fraîches</span></h3>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
              </div>
            </div>

            <div class="col-md-4 wow fadeIn">
              <div className="menubord">
                 <h3 class="mb50" className='popo'><span class="heading-font text-uppercase">Pates fraîches</span></h3>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
                <h4>Lorem Ipsum <span class="theme-accent-color">$8.95</span></h4>
                <p>No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be.</p>
              </div>
            </div>
        </div>
        </div>
      )
  }

}

export default Menu;
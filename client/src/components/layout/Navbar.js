import React, {Fragment, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {logout, register} from '../../actions/auth';
import Logo from '../../img/logo.png'




const Navbar=({ auth: { isAuthenticated, loading }, logout })=>{
  const history = useHistory()
  const authLinks=(
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-5">
        <Link to='/menus'>
          <i className="white fas fa-utensil-spoon"></i>{''}
          <span className="white hide-sm">&nbsp;&nbsp;Menu</span>
        </Link>
      </li>
      <li className="nav-item mr-5">
        <Link onClick={ () => {history.push('/transactionsEnCours'); window.location.reload()}}>
          <i className="white fas fa-list"></i>{''}
          <span className="white hide-sm">&nbsp;&nbsp;Commandes</span>
        </Link>
      </li>
      <li className="nav-item mr-5">
        <Link onClick={ () => {history.push('/transactions'); window.location.reload()}}>
          <i className="white fas fa-calculator "></i>{''}
          <span className="white hide-sm">&nbsp;&nbsp;Transactions</span>
        </Link>
      </li>
      <li className="nav-item mr-5">
        <Link onClick={ () => {history.push('/clients'); window.location.reload()}}>
          <i className="white fas fa-child "></i>{''}
          <span className="white hide-sm">&nbsp;&nbsp;Clients</span>
        </Link>
      </li>
      <li className="nav-item mr-5">
        <Link to='/recherche'>
          <i className="white fas fa-search"></i>{''}
          <span className="white hide-sm">&nbsp;&nbsp;Recherche</span>
        </Link>
      </li>
      <li className="nav-item mr-3">
        <a onClick={logout} href='/'>
          <i className="white fas fa-sign-out-alt"></i>{''}
          <span className="white hide-sm">&nbsp;&nbsp;Déconnexion</span>
        </a>
      </li>
    </ul>
  );
  
  let guestLinks=null;
  const pathname = window.location.pathname;
  
  let aboutLinks=(
    <li className="nav-item mr-3">
      <a className="nav-link js-scroll-trigger" href="#about">
        <i className="white fa fa-info"></i>{''}
        <span className="white hide-sm">&nbsp;&nbsp;A propos</span>
      </a>
    </li>
  );

  let teamLinks=(
    <li className="nav-item mr-3">
      <a className="nav-link js-scroll-trigger" href="#fidelite">
        <i className="white fas fa-money-check"></i>{''}
        <span className="white hide-sm">&nbsp;&nbsp;Fidélité</span>
      </a>
    </li>
  );

  let orderLinks=(
    <li className="nav-item mr-3">
      <a className="nav-link js-scroll-trigger" href="order">
        <i className="white fas fa-cart-plus"></i>{''}
        <span className="white hide-sm">&nbsp;&nbsp;Commander</span>
      </a>
    </li>
  );
  
  let loginLinks=(
    <li className="nav-item mr-3">
      <a className="nav-link js-scroll-trigger" href="login">
        <i className="white fas fa-sign-in-alt"></i>{''}
        <span className="white hide-sm">&nbsp;&nbsp;Connexion</span>
      </a>
    </li>
  );
  

  if(pathname!='/order' && pathname!='/print'){
    guestLinks=(
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-3">
          <a className="nav-link js-scroll-trigger" href="">
            <i className="white fas fa-home"></i>{''}
            <span className="white hide-sm">&nbsp;&nbsp;Accueil</span>
          </a>
        </li>
        {pathname=='/' ? aboutLinks : null}
        {pathname=='/' ? teamLinks : null}
        {pathname=='/' ? orderLinks : null}
        {pathname=='/' || pathname=='/login' || pathname=='/print'}
        {pathname=='/' || pathname=='/login' || pathname=='/print' ? loginLinks : null}
      </ul>
    );
  }

  const navbar=(
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">La Pomme</Link>
        </h1>
        <ul>
          {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
        </ul>
      </nav>
  );

  const [navbarMobile, showNavbarMobile] = useState("none");

  return(
    <header id="header" className="fixed-top">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="/">
                            <img src={Logo} className="logo" alt="" />
                        </a>
                        <button className="btn-hamburger navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded" type="button" 
                          onClick={() => {
                            {navbarMobile=='none' ? showNavbarMobile("block") : showNavbarMobile("none")};
                          }}>
                            <i className="fas fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            {isAuthenticated ? authLinks : guestLinks}
                        </div>
                    </div>

                    <div className="navbar-mobile" style={{display:navbarMobile}}>
                      {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
            </header>
  );
};

Navbar.propTypes={
    logout:propTypes.func.isRequired,
    auth:propTypes.object.isRequired
};

const mapStateToProps=state=>({
    auth:state.auth
});

export default connect(mapStateToProps,{logout})(Navbar);
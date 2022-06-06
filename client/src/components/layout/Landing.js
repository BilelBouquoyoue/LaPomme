import React, {Fragment, useState} from "react";
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {login} from '../../actions/auth';

const Landing=({login,isAuthenticated})=>{

    //Redirect if logged in
    if(isAuthenticated){
        return <Redirect to="/menus" />;
    }

    return <Fragment>
            <main id="transcroller-body" className="aos-all" >
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-down">
                            <img src="https://acegif.com/wp-content/gifs/apple-81.gif" className="img-hero img-fluid animated" alt="" />
                        </div>
                        <div className="col-lg-12 mt-3 d-flex center flex-column justify-content-center" data-aos="fade-up">
                            <h1>La Pomme</h1>
                            <h2>Nous tenons à vous proposer le meilleur!</h2>
                            <div className="d-lg-flex justify-content-center">
                                <a href="/order" className="btn-get-started scrollto">Commander</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">A PROPOS</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6 center-sm container" data-aos="fade-right">
                            <img className="img-subhero" src="https://rs-menus-api.roocdn.com/images/6525e5dd-66f4-4043-bd40-cfcc2acb52b6/image.jpeg?width=1200&height=630&fit=crop" />
                        </div>
                        <div className="col-lg-6 left d-flex align-items-center" data-aos="fade-left">
                            <div>
                                <p>
                                    <strong>La Pomme</strong> fut fondée il y a 29 ans <br/>
                                    Tout a commencé à Waterloo, pour continuer sur Wauthier-Braine.  <br/>
                                    Le restaurant s'est mis à livrer depuis la période tragique du corona<br/>
                                </p>
                                <p>
                                Le principal ingrédient pour toute une bonne cuisine familiale est <strong>l’Amour</strong>,
                                l’amour envers ceux pour qui vous cuisiner. <br/><br/><br/>
                                <h6><strong>Notre adresse est : Chaussée de Tubize 210, 1440 Braine-le-Château</strong></h6>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services section-bg sm">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">DES PLATS AU TOP</h2>
                    </div>

                    <div className="row content d-flex flex-row-reverse">
                        <div className="col-lg-6 center-sm left" data-aos="fade-left">
                            <img className="img-subhero" src="https://mighty-reef-58921.herokuapp.com/img/hero_bapak.png" />
                        </div>
                        <div className="col-lg-6 left-sm d-flex align-items-center">
                            <div data-aos="fade-right">
                                <p className="black">
                                    <strong>La Pomme</strong> propose des burgers au goût exquis.<br/>
                                    Nous utilisons les meilleurs ingrédients afin de fournir un service d'une qualité supérieure. <br/>
                                    Nous mettons un point d'honneur à maintenir une hygiène irréprochable.
                                </p>
                                <p className="black">
                                    We're working with our family because we have the same passion at cooking since our grandmother.<br/>
                                    For us the most importang things is a taste of the dish itself.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services section-bg md">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">DES PLATS AU TOP</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6 left-sm d-flex align-items-center">
                            <div data-aos="fade-right">
                                <p className="black">
                                    <strong>La Pomme</strong> propose des burgers au goût exquis.<br/>
                                    Nous utilisons les meilleurs ingrédients afin de fournir un service d'une qualité supérieure. <br/>
                                    Nous mettons un point d'honneur à maintenir une hygiène irréprochable.
                                </p>
                                <p className="black">
                                    L'ambiance y est familiale et l'équipe est réellement soudés afin de faire face à toutes vos demandes.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 center-sm left" data-aos="fade-left">
                            <img className="img-subhero" src="https://foodscene.deliveroo.be/assets/images/blogs/foodscene.deliveroo.be/fr/restaurants/1IUMIBtoh0CGUeWM6oul2ofVLlAw8M0x_o-ou1PgFSp4/2_lapomme.jpg?v=1.01" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3>Menu du restaurant</h3>
                            <p>Vous pouvez télécharger notre menu ici.</p>
                            <a target="_blank" href="https://drive.google.com/file/d/1CubI1InvEgqdyi32FW49nYoh6aRwrwcq/view?usp=sharing" className="btn-get-started scrollto">Menu</a>
                        </div>
                    </div>

                </div>
            </section>

            <section id="team" className="team section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>TEAM</h2>
                        <p>Our team consists of best people on their skills.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src="https://mighty-reef-58921.herokuapp.com/img/chef-1.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Sergio Verdial</h4>
                                    <span>Service</span>
                                    <p>18 years old amateur homecook from Malang, East java, Indonesia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src="https://mighty-reef-58921.herokuapp.com/img/chef-2.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Andre Verdial</h4>
                                    <span>Homecook</span>
                                    <p>18 years old amateur homecook from Malang, East java, Indonesia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src="https://mighty-reef-58921.herokuapp.com/img/chef-3.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Rochdi</h4>
                                    <span>Sous Chef</span>
                                    <p>29 years old sous chef from Malang, East java, Indonesia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src="https://mighty-reef-58921.herokuapp.com/img/chef-4.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Laurent Fuentes</h4>
                                    <span>Executive Chef</span>
                                    <p>25 years old executive chef from Malang, East java, Indonesia.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </main>

        <footer id="footer">
            <div className="container footer-bottom clearfix center">
                <div className="copyright">
                    © Copyright 2021 La Pomme Team All Rights Reserved et retrouvez nous à l'adresse Chaussée de Tubize 210, 1440 Braine-le-Château
                </div>
            </div>
        </footer>

    </Fragment>
}

Landing.propTypes={
    login:propTypes.func.isRequired,
    isAuthenticated:propTypes.bool
};

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, 
    {login})
    (Landing);
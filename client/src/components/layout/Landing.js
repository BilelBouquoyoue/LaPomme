import React, {Fragment, useState} from "react";
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {login} from '../../actions/auth';
import livraison from './livraison.png'
import gagner from './gagner.png'
import acheter from './acheter.png'
import recomp from './recomp.png'

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
                                <h6><strong>Notre numéro est : 02 354 43 04</strong></h6>
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
                            <a target="_blank" href="https://qrco.de/bbcv5J" className="btn-get-started scrollto">Menu</a>
                        </div>
                    </div>

                </div>
            </section>

            <section id="fidelite" className="team section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Fidélité</h2>
                        <p>Gagnez des points de fidélité en commandant ici.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src={livraison} className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><strong>1.</strong> Faites votre commande sur ce site.</h4>
                                    <p>Composez votre commande via la page dédiée à celle-ci en cliquant sur le bouton commander en haut de la page.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src={gagner} className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><strong>2.</strong> Gagnez des points.</h4>
                                    <p>Chaque euro dépensé lors de votre commande augmente de 1 votre montant de points de fidélité.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src={acheter} className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><strong>3.</strong> Où depenser ses points?</h4>
                                    <p>Vos points ne sont dépensable qu'au restaurant. Lors de votre visite sur place, vous pourrez utiliser votre montant de points afin d'obtenir des récompenses.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" data-aos="fade-up">
                                <div className="pic"><img src={recomp} className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><strong>4.</strong> Que peut-on obtenir?</h4>
                                    <p>Les récompensenses sont des desserts, des bons de réductions ou encore une bouteille de vin. Plus d'informations sur le ticket de caisse de votre commande.</p>
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
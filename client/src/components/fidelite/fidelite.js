import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import { getScoreByNum } from '../../actions/fidelites';
import axios from "axios";
import vin from "./vin.png"
import glace from './glace.png'
import promo from './promo.png'





const Fidelites = () => {

        const [data, setData] = useState([]);
        const tel = useParams();


        function reductionScore(){
            try {
                const res = axios.post(`/api/score/glace/${tel.num}`);
                window.location = `/recompense/${tel.num}`
              } catch (err) {
                console.log(err);
              }     
        }

        function reductionScore2(){
            try {
                const res = axios.post(`/api/score/vin/${tel.num}`);
                window.location = `/recompense/${tel.num}`
              } catch (err) {
                console.log(err);
              }     
        }

        function reductionScore3(){
            try {
                const res = axios.post(`/api/score/promo/${tel.num}`);
                window.location = `/recompense/${tel.num}`
              } catch (err) {
                console.log(err);
              }     
        }

        const getData = async () => {
            const { data } = await axios.get(`/api/score/${tel.num}`);
            setData(data);
            console.log(tel)
          };

          useEffect(() => {
            getData();
          }, []);

        return (
            <Fragment>
                <div id='abaon'>
                    
                </div>
                <div className="d-flex justify-content-around mt-5">
                    <div className="fidelites mt-5">
                        <h1>Points actuels <span class="badge badge-secondary">{data.total}</span></h1>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="d-flex justify-content-around">
                    <img src={vin} class="rounded float-left" width={'20%'} onClick= {() => reductionScore2()}></img>
                    <img src={glace} class="rounded float-right" width={'20%'} onClick= {() => reductionScore()}></img>
                    <img src={promo} class="rounded float-center" width={'20%'} onClick= {() => reductionScore3()}></img>
                </div>
            </Fragment>
        );
};

Fidelites.propTypes = {
    getScoreByNum: propTypes.func.isRequired,
    fidelite: propTypes.object.isRequired
}

const mapStateToProps= state => ({
    fidelite: state.fidelite
});

export default connect(mapStateToProps, {getScoreByNum})(Fidelites);
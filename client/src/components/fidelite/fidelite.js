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
        const tel2 = useParams();


        const [formData2, setFormData] = useState({
          tel: '',
      });
      const {tel} = formData2;

        const onTextChange = e => {
          setFormData({...formData2,[e.target.name]:e.target.value.toString()});
          console.log(formData2.tel.toString())
      };


      const onSubmit = async e => {
        e.preventDefault();
        try {
          const res = await axios.post(`/api/score/change/${tel2.num}`, formData2, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          const tel = res.data;
    
        } catch (err) {
          console.log("error")
        }
      };


        function envoiDb(indice){
          try {
              const formData = new FormData();
              formData.append('telephone', tel2.num)
              formData.append('recompense', indice)
              const res = axios.post('/api/recompense', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
  
              const id = res.data;
            } catch (err) {
              console.log(err);
            }     
      }

        function reductionScore(indice){
            try {
                const res = axios.post(`/api/score/glace/${tel2.num}`);
                envoiDb(indice)
                window.location = `/recompense/${tel2.num}`
              } catch (err) {
                console.log(err);
              }     
        }

        function reductionScore2(indice){
            try {
                const res = axios.post(`/api/score/vin/${tel.num}`);
                envoiDb(indice)
                window.location = `/recompense/${tel2.num}`
              } catch (err) {
                console.log(err);
              }     
        }

        function reductionScore3(indice){
            try {
                const res = axios.post(`/api/score/promo/${tel2.num}`);
                envoiDb(indice)
                window.location = `/recompense/${tel2.num}`
              } catch (err) {
                console.log(err);
              }     
        }

        const getData = async () => {
            const { data } = await axios.get(`/api/score/${tel2.num}`);
            setData(data);
            console.log(tel2)
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
                    <img src={vin} class="rounded float-left" width={'20%'} onClick= {() => reductionScore2("vin")}></img>
                    <img src={glace} class="rounded float-right" width={'20%'} onClick= {() => reductionScore("glace")}></img>
                    <img src={promo} class="rounded float-center" width={'20%'} onClick= {() => reductionScore3("promo")}></img>
                </div>
                <div className="d-flex justify-content-center mt-1">
                  <form onSubmit={console.log()}>
                    <table className="mt-5" cellPadding="10">
                      <tr>
                        <td class="center" colSpan="3">
                          <h2>Numéro actuel du client : <b>{data.telephone}</b></h2>
                        </td>
                      </tr>
                      <tr>
                        <td class="center" colSpan="4"></td>
                      </tr>
                      <tr>
                        <td>Changer de numéro de telephone :</td>
                        <td>:</td>
                        <td><input value={tel} required type="text" name="tel" onChange={e => onTextChange(e)}/></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>
                          <input
                            type='submit'
                            value='Rechercher'
                            className='btn btn-primary btn-block mt-4'
                          />
                        </td>
                      </tr>
                      </table>
                    </form>
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
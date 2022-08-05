import React, {Fragment, useEffect, useState} from 'react';
import propTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import fide from './fideliteprint.png';
import {connect} from 'react-redux';
import { getItems2 } from '../../actions/transactions';
import axios from "axios";
import logo from '../../img/logo.png'

const Print2 = ({
  getItems2, item:{items,loading},
  match
}) => { 
    const [data, setData] = useState([]);
    const tel = useParams();

    const getData = async (a) => {
      const { data } = await axios.get(`/api/score/${a}`);
      setData(data);
      console.log(tel)
    };

    useEffect(() => {
      getItems2(match.params.id);
      getData(items.telephone);
      console.log(items);
    }, [getItems2,loading]);

    const goToOrder = (event) => {
      event.preventDefault();
      window.location = `/order`;
    };

  //console.log(menu)
    return loading ? (
      <Spinner />
        ) : (
      <Fragment>
        <div className="container p-3">
          <div className=" bg-white print">
          <div className="row mb-5">
            <div className="col-lg-6 col-md-6">
                <h3 className>Transaction Note</h3>
                <h5 className><strong>Client : </strong>{items.nomClient}</h5>
                <h5 className><strong>Adresse : </strong>{items.adresse}&nbsp;</h5>
                <h5 className><strong>Numero : </strong>{items.telephone}&nbsp;</h5>
                <h5 className><strong>Points de fidélité : </strong>{data.total}&nbsp;</h5>
            </div>
            <div className="col-lg-6 col-md-6 right">
              <img src={logo} class="logo-print" alt=""></img>
            </div>
          </div>
        {items.menu.map((item,index) => (
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-5">
                    <b>{item.amount} x {item.name}</b>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-2 right">
                </div>
                <div className="col-lg-4 col-md-4 col-sm-5 right">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(item.price*item.amount)}
                </div>
            </div>
          ))}
          <div className="row">
              <div className="col-lg-12">
                <hr></hr>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-5">
                  <b>Remarque : </b>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-2 right">
              </div>
              <div className="col-lg-4 col-md-4 col-sm-2 right">
                {items.remarque}
              </div>
            </div>
          <div className="row">
              <div className="col-lg-12">
                <hr></hr>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-5">
                  <b>Grand Total</b>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-2 right">
                  
              </div>
              <div className="col-lg-4 col-md-4 col-sm-5 right">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(items.total)}
              </div>
          </div>
          <br></br>
          <br></br>
          <img src={fide} width='100%'></img>
          </div>
        </div>

        <div className="container">
          <div className="row mt-3">
              <div className="col-lg-12 right mb-5">
                <button className="btn btn-danger" onClick={goToOrder}>Order Again</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={window.print}>Print</button>
              </div>
          </div>
        </div>

      </Fragment>
    );
  };

Print2.propTypes = {
  getItems2: propTypes.func.isRequired,
  item: propTypes.object.isRequired
}

const mapStateToProps= state => ({
  item: state.item
});

export default connect(
  mapStateToProps, 
  {getItems2}
)(Print2);
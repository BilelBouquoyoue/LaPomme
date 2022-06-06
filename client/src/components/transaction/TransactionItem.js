import React, {Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import callButton from './fonction';





const TransactionItem = ({
  transaction: { _id, user_id, total, menu, date, adresse, telephone, nomClient },
  //count: no
}) => { 
  console.log(menu)
  return(
    <div className="sub-trans bg-white">
      <div className="center">
        {menu.map((men) => (
          <div>{men.amount} {men.name}</div>
        )
        )}
      </div>
      <div className="m-1 center">
        {nomClient}
      </div>
      <div className="m-2 center">
        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(total)}
      </div>
      <div className="m-2 center">
          <Moment format='DD-MM-YYYY HH:mm:ss'>{date}</Moment>
      </div>
      <div className="m-1 center">
        {adresse}
      </div>
      <div>
        <button class="btn btn-success" onClick={() => {callButton(_id) }}>Voir Commande</button>
      </div>
    </div>
    )};

const mapStateToProps= state => ({
    auth: state.auth
});



export default connect(
  mapStateToProps, 
  null
)(TransactionItem);
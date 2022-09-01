import React, {Fragment, useEffect} from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';





const TransactionItem2 = ({
  transaction: { _id, user_id, total, menu, date, adresse, telephone, nomClient, remarque },
  //count: no
}) => { 
  return(
    <div className="sub-trans bg-white border">

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
        {total+ '€'}
      </div>
      <div className="m-2 center">
          <Moment format='DD-MM-YYYY HH:mm:ss'>{date}</Moment>
      </div>
      <div className="m-1 center">
        {adresse}
      </div>
      <div className="m-2 center">
        <button class="btn btn-success" onClick={() => {window.location = `/print/${_id}`}}>Voir Commande</button>
      </div>
      
    </div>
    )};

const mapStateToProps= state => ({
    auth: state.auth
});



export default connect(
  mapStateToProps, 
  null
)(TransactionItem2);
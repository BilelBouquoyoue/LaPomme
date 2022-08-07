import React, {Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import callButton2 from './fonction';
import deleteCommande from './fonction';
import axios from 'axios';
import Swal from 'sweetalert2'





const TransactionItem = ({
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
          <Moment format='DD-MM-YYYY HH:mm:ss'>{date}</Moment>
      </div>
      <div className="m-1 center">
        {adresse}
      </div>
      <div className="m-2 center">
        <button class="btn btn-success" onClick={() => {window.location = `/print2/${_id}`}}>Voir Commande</button>
      </div>
      <div className="m-2 center">
        <button class="btn btn-warning" onClick={() => { Swal.fire({
            title: 'Voulez-vous archiver cette commande?',
            showDenyButton: true,
            confirmButtonText: 'Oui',
            denyButtonText: `Non`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) { 
              Swal.fire({
                title: 'Transaction archivée!',
                confirmButtonText: 'OK',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  axios.delete(`/api/transactionEnCours/${_id}`);
                  window.location.reload(false);
                } else{
                  axios.delete(`/api/transactionEnCours/${_id}`);
                  window.location.reload(false);
                }
              })
            } else if (result.isDenied) {
              Swal.fire('Commande non archivée', '', 'info')
            }
})}}>Archiver</button>
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
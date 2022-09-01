import React, {Fragment, useEffect} from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2'





const ClientItem = ({
  transaction: {_id, adresse, telephone, nomClient},
  //count: no
}) => { 
  return(
    <div className="sub-trans bg-white border">
      <div className="m-1 center">
        {nomClient}
      </div>
      <div className="m-1 center">
        {adresse}
      </div>
      <div className="m-1 center">
        {telephone}
      </div>
      <div className="m-2 center">
        <button class="btn btn-secondary" onClick={() => {window.location = `/historique/${telephone}`}}>Ses commandes</button>
      </div>
      <div className="m-2 center">
        <button class="btn btn-info" onClick={() => {window.location = `/score/${telephone}`}}>Solde et récompense</button>
      </div>
      <div className="m-2 center">
        <button class="btn btn-danger" onClick={() => { Swal.fire({
            title: 'Voulez-vous supprimer ce client?',
            showDenyButton: true,
            confirmButtonText: 'Oui',
            denyButtonText: `Non`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) { 
              Swal.fire({
                title: 'Client supprimé!',
                confirmButtonText: 'OK',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  axios.delete(`/api/clients/${_id}`);
                  window.location.reload(false);
                } else{
                  axios.delete(`/api/clients/${_id}`);
                  window.location.reload(false);
                }
              })
            } else if (result.isDenied) {
              Swal.fire('Client non supprimé', '', 'info')
            }
})}}>Supprimer</button>
      </div>
    </div>
    )};

const mapStateToProps= state => ({
    auth: state.auth
});



export default connect(
  mapStateToProps, 
  null
)(ClientItem);
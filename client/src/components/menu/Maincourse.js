import React, {Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteMaincourse} from '../../actions/menu';
import axios from 'axios';
import Swal from 'sweetalert2'



function verifyState(a){
  if(a == '-1'){
    return 'non affiché'
  }
  else{
    return 'affiché'
  }
}





const Maincourse = ({
  deleteMaincourse,
  maincourse: { _id, name, price, type, pic, description,hide },
}) => (
  <div className="menu bg-white d-flex align-items-center">
      <div>
        <img className="img-menu" src={`https://mighty-reef-58921.herokuapp.com/menu/main-course.png`} />
      </div>
      <div className="price">
        <div>
          <h3>
            {name}
          </h3>
          <h6>
            {description}
          </h6>
          <h3>
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(price)}
          </h3>
          <h6>{verifyState(hide)}</h6>
        </div>
      </div>
      <div className="center">
        <h3 className="my-1">
          <button onClick={e => deleteMaincourse(_id)}
              type="button"
              className="btn btn-danger">
                  {<i className="fas fa-times"></i>}
          </button>
        </h3>
      </div>
      <div>
      <h3 className="my-1">
          <button onClick={() => { Swal.fire({
            title: "Voulez-vous changer l'état cette commande?",
            showDenyButton: true,
            confirmButtonText: 'Oui',
            denyButtonText: `Non`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              axios.post(`/api/menu/hide/${_id}`);
              Swal.fire('Etat changé', '', 'success')
              setTimeout(() => {
                window.location.reload();
              }, 2000);
              
            } else if (result.isDenied) {
              Swal.fire('Etat non changé', '', 'info')
            }
            })}}type="button"
            className="btn btn-warning">
            {<i className="fas fa-eye"></i>}
          </button>
        </h3>
      </div>
      <div className="center">
        <Link to={`/editmenu/${_id}`}>
          <div className="btn btn-danger mr-2">
            {<i className="fas fa-edit"></i>}
          </div>
        </Link>
      </div>
  </div>
    );

Maincourse.defaultProps = {
  showActions: true
}


Maincourse.propTypes = {
  deleteMaincourse:propTypes.object.isRequired
}

const mapStateToProps= state => ({
    auth: state.auth
});

export default connect(
  mapStateToProps, 
  {deleteMaincourse}
)(Maincourse);
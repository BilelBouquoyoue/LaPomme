import React, {Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteAppetizer} from '../../actions/menu';

const Appetizer = ({
  deleteAppetizer,
  appetizer: { _id, name, price, type, pic, description }
}) => (
    <div className="menu bg-white d-flex align-items-center">
      <div>
        <img className="img-menu" src={`https://mighty-reef-58921.herokuapp.com/menu/appetizer.png`} />
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
        </div>
      </div>
      <div className="center">
        <h3 className="my-1">
          <button onClick={e => deleteAppetizer(_id)}
              type="button"
              className="btn btn-danger">
                  {<i className="fas fa-times"></i>}
          </button>
        </h3>
      </div>
    </div>
    );

Appetizer.defaultProps = {
  showActions: true
}


Appetizer.propTypes = {
  deleteAppetizer:propTypes.object.isRequired
}

const mapStateToProps= state => ({
    auth: state.auth
});

export default connect(
  mapStateToProps, 
  {deleteAppetizer}
)(Appetizer);
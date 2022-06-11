import React, {Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import callButton from './fonction';





const FideliteItem = ({
  fidelite: { telephone, score },
  //count: no
}) => { 
  console.log(score)
  return(
    <div className="sub-trans bg-white">
      <div className="m-1 center">
        {telephone}
      </div>
      <div className="m-1 center">
        {telephone}
      </div>
      <div className="m-1 center">
        {telephone}
      </div>
      <div className="m-1 center">
        {score}
      </div>
      <div className="m-1 center">
        {score}
      </div>
    </div>
    )};

const mapStateToProps= state => ({
    auth: state.auth
});



export default connect(
  mapStateToProps, 
  null
)(FideliteItem);
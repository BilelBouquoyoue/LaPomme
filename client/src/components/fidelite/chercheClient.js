import React, { Fragment, useState } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const AddMenu = () => {
  const [formData, setFormData] = useState({
      numero: '',
  });
  const {numero} = formData;


  const onTextChange = e => {
      setFormData({...formData,[e.target.name]:e.target.value});
      console.log(formData.numero)
      
};


  const onSubmit = async e => {
    e.preventDefault();
    try {
        window.location = `/score/${formData.numero}`

    } catch (err) {
      console.log("error")
    }
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center mt-5">
        <form onSubmit={onSubmit}>
          <table className="mt-5" cellPadding="10">
            <tr>
              <td class="center" colSpan="3">
                <h2>Entrez le numéro du client</h2>
              </td>
            </tr>
            <tr>
              <td class="center" colSpan="4"></td>
            </tr>
            <tr>
              <td>Numero</td>
              <td>:</td>
              <td><input required value={numero} type="text" name="numero" onChange={e => onTextChange(e)} /></td>
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

export default AddMenu;

import React, { Fragment, useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import Progress from './Progress';
import axios from 'axios';
import { getMenu } from '../../actions/menu';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const EditMenu = () => {
  const [formData, setFormData] = useState({
      price: '',
      description: ''
  });
  const {name, price, type, description} = formData;

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  let id = useParams();
  const [data, setData] = useState([]);
  const getData = async (a) => {
    const { data } = await axios.get(`/api/menu/load/${a.id}`)
    setData(data);
  };

  useEffect(() => {
    getData(id)
  })

  const onTextChange = e => setFormData({...formData,[e.target.name]:e.target.value});

  // const onChange = e => {
  //   setFile(e.target.files[0]);
  //   setFilename(e.target.files[0].name);
  // };

  const onSubmit = async e => {
    Swal.fire({
        icon: 'success',
        title: 'Modifications validées'
      })
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    if(price == ""){
        formData.append('price', data.price);
    }
    else{
        formData.append('price', price);
    }
    formData.append('type', data.type);
    if(description == ""){
        formData.append('description', data.description);
    }
    else{
        formData.append('description', description);
    }
    
    //formData.append('file', file);

    try {
        const res = await axios.put('/api/menu/'+data._id, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
              setUploadPercentage(
                parseInt(
                  Math.round((progressEvent.loaded * 100) / progressEvent.total)
                )
              );
            }
          });
          
          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
    
          const { fileName, filePath } = res.data;
    
          setUploadedFile({ fileName, filePath });
    
          window.location = "/menus";
          //<Redirect to="/dashboard" />;
    } catch (err) {
      setMessage(err);
      // if (err.response.status === 500) {
      //   setMessage('There was a problem with the server');
      // } else {
      //   setMessage(err.response.data.msg);
      // }
      setUploadPercentage(0)
    }
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center mt-5">
        <form onSubmit={onSubmit}>
          <table className="mt-5" cellPadding="10">
            <tr>
              <td class="center" colSpan="3">
                <h2>{data.name}</h2>
              </td>
            </tr>
            <tr>
              <td class="center" colSpan="4"></td>
            </tr>
            <tr>
              <td>Prix</td>
              <td>:</td>
              <td><input placeholder={data.price} value={price} type="number" name="price" min="1" max="100" onChange={e => onTextChange(e)} /></td>
            </tr>
            <tr>
              <td>Description</td>
              <td>:</td>
              <td><input placeholder={data.description} value={description} type="text" name="description" onChange={e => onTextChange(e)} /></td>
            </tr>
            {/* <tr>
              <td>Image</td>
              <td>:</td>
              <td>
                <input
                  type='file'
                  className='custom-file-input'
                  id='customFile'
                  required
                  onChange={onChange}
                />
              </td>
            </tr> */}
            <tr>
              <td></td>
              <td></td>
              <td>
                {/* <Progress percentage={uploadPercentage} />
                {uploadedFile ? (
                    <div>
                      <h3 className='text-center'>{uploadedFile.fileName}</h3>
                      <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                    </div>
                ) : null} */}
                <input
                  type='submit'
                  value='Upload'
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

export default EditMenu;

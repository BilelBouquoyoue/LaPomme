import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import validation from './validation.png'



const RecompFini = () => {
    const [data, setData] = useState([]);
    const tel = useParams();

    const getData = async () => {
        const { data } = await axios.get(`/api/score/${tel.num}`);
        setData(data);
      };

      useEffect(() => {
        getData();
      }, []);


        return (
            <Fragment>
                <br></br>
                <div className="d-flex justify-content-around mt-5">
                    <div className="fidelites mt-5">
                        <br></br>
                        <img src={validation} class="rounded float-center" width={'75%'}></img>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>Points actuels <span class="badge badge-secondary">{data.total}</span></h1>
                    </div>
                </div>
            </Fragment>
        );
};



export default RecompFini;
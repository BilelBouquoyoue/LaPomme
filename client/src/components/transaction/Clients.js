import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Client from './ClientItem';
import {connect} from 'react-redux';
import { getClients } from '../../actions/transactions';
import Pagination from "react-js-pagination";



const Clients = (
    {
        getClients, transaction: {transactions, loading}
    }
    ) => {
        const [all, setAll] = useState(transactions);
        const [currentPage, setCurrentPage] = useState();
        const [allPerPage, setAllPerPage] = useState();
        const [currentAll, setCurrentAll] = useState([]);

        // Logic for displaying all
        const getCurrentAll = () => {
            const indexOfLastTodo = currentPage * allPerPage;
            const indexOfFirstTodo = indexOfLastTodo - allPerPage;
            setCurrentAll(all.slice(indexOfFirstTodo, indexOfLastTodo))
        }

        let count=0;
        let thisPage=1;
        const renderAll = currentAll.map((transaction) => {
            if(thisPage!=currentPage){
                count=count+1+((currentPage-1)*allPerPage);
                thisPage=currentPage;
            }else{
                count=count+1;
            }
            //count=count+1+((thisPage-1)*allPerPage);
            //console.log(thisPage+" "+currentPage)
            return <Client key={transaction._id} transaction={transaction} count={count} />;
        });

        const handlePageChange = (pageNumber) => {
            //console.log(`active page is ${pageNumber}`);
            setCurrentPage(pageNumber);
        }

        //console.log(all)
        useEffect(()=>{
            getClients();
            setCurrentPage(1);
            setAllPerPage(10);
            setAll(transactions);
        }, [loading, getClients]);

        useEffect(()=>{
            getCurrentAll();
        }, [all]);

        useEffect(()=>{
            getCurrentAll();
        }, [currentPage]);

        return loading ? ( 
            <Spinner />
        ) : (
            <Fragment>
                <div className="d-flex justify-content-around mt-5">
                    <div className="transactions mt-5">
                        <div className="sub-trans top-trans center mt-3">
                            <div>
                                <h4 className="white">Nom Client</h4>
                            </div>
                            <div>
                                <h4 className="white">Adresse</h4>
                            </div>
                            <div>
                                <h4 className="white">N° téléphone</h4>
                            </div>
                            <div>
                                <h4 className="white">Historique</h4>
                            </div>
                            <div>
                                <h4 className="white">Fidélité</h4>
                            </div>
                            <div>
                                <h4 className="white">Suppression</h4>
                            </div>
                        </div>
                        {renderAll}
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                <Pagination
                activePage={currentPage}
                itemsCountPerPage={allPerPage}
                totalItemsCount={all.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                />
                </div>
            </Fragment>
        );
};

Clients.propTypes = {
    getClients: propTypes.func.isRequired,
    transaction: propTypes.object.isRequired
}

const mapStateToProps= state => ({
    transaction: state.transaction
});

export default connect(mapStateToProps, {getClients})(Clients);
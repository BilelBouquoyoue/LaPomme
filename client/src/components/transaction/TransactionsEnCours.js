import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Transaction from './TransactionItem';
import {connect} from 'react-redux';
import { getTransactionsEnCours } from '../../actions/transactions';
import Pagination from "react-js-pagination";



const Transactions = (
    {
        getTransactionsEnCours, transaction: {transactions, loading}
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
            return <Transaction key={transaction._id} transaction={transaction} count={count} />;
        });

        const handlePageChange = (pageNumber) => {
            //console.log(`active page is ${pageNumber}`);
            setCurrentPage(pageNumber);
        }

        //console.log(all)
        useEffect(()=>{
            getTransactionsEnCours();
            setCurrentPage(1);
            setAllPerPage(10);
            setAll(transactions);
        }, [loading, getTransactionsEnCours]);

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
                                <h4 className="white">Commande</h4>
                            </div>
                            <div>
                                <h4 className="white">Nom client</h4>
                            </div>
                            <div>
                                <h4 className="white">Date Transaction</h4>
                            </div>
                            <div>
                                <h4 className='white'>Adresse</h4>
                            </div>
                            <div>
                                <h4 className='white'>Commande</h4>
                            </div>
                            <div>
                                <h4 className='white'>Archivage</h4>
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

Transactions.propTypes = {
    getTransactionsEnCours: propTypes.func.isRequired,
    transaction: propTypes.object.isRequired
}

const mapStateToProps= state => ({
    transaction: state.transaction
});

export default connect(mapStateToProps, {getTransactionsEnCours})(Transactions);
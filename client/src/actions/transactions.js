import axios from 'axios';
import { useParams } from 'react-router-dom';
import {setAlert} from './alert';
import {
    GET_TRANSACTIONS,
    GET_TRANSACTION,
    TRANSACTION_ERROR,
    GET_ITEMS,
    GET_ITEM,
    ITEM_ERROR,
} from './types';

// Get posts
export const getClients = () => async dispatch => {
    try {
        const res=await axios.get('/api/clients/');

        dispatch({
            type:GET_TRANSACTIONS,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const getTransactions = () => async dispatch => {
    try {
        const res=await axios.get('/api/transaction/');

        dispatch({
            type:GET_TRANSACTIONS,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}


export const getTransactionsH = tel2 => async dispatch => {
    try {
        const res=await axios.get(`/api/transaction/historique/${tel2}`);

        dispatch({
            type:GET_TRANSACTIONS,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const getTransactionsEnCours = () => async dispatch => {
    try {
        const res=await axios.get('/api/transactionEnCours/');

        dispatch({
            type:GET_TRANSACTIONS,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Get post
export const getItems = id => async dispatch => {
    try {
        const res=await axios.get(`/api/transaction/${id}`);
        //console.log(res.data);

        dispatch({
            type:GET_ITEMS,
            payload:res.data
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: ITEM_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const getItems2 = id => async dispatch => {
    try {
        const res=await axios.get(`/api/transactionEnCours/${id}`);
        console.log(res.data);

        dispatch({
            type:GET_ITEMS,
            payload:res.data
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: ITEM_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
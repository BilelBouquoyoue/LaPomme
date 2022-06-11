import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_TRANSACTIONS,
    GET_SCORE,
    TRANSACTION_ERROR,
    GET_ITEMS,
    GET_ITEM,
    ITEM_ERROR,
} from './types';


export const getScoreByNum = numero => async dispatch => {
    try {
        const res = await axios.get(`/api/score/${numero}`);

        dispatch({
            type:GET_SCORE,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type: ITEM_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}
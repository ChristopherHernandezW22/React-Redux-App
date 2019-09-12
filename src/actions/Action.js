import axios from "axios";
import { dispatch } from "rxjs/internal/observable/range";

export const FETCH_CARDID_START = "FETCH_CARDID_START";
export const FETCH_CARDID_SUCCESS = "FETCH_CARDID_SUCCESS";
export const FETCH_CARDID_FAIL = "FETCH_CARDID_FAIL";

export const getCardID = () => dispatch => {
    console.log("testing");
    dispatch({ type: FETCH_CARDID_START });
    axios.get(`https://rapidapi.com/omgvamp/api/hearthstone?apiKey=${process.env.REACT_APP_CARDID_KEY}`)
    // .then (res => console.log(res))
    .then (res => dispatch({ type: FETCH_CARDID_SUCCESS, PAYLOAD: res.data}))
    .catch (err => dispatch({ type: FETCH_CARDID_FAIL, PAYLOAD: err.response}));
};
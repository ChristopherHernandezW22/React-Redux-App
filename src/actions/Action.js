import axios from "axios";
import { dispatch } from "rxjs/internal/observable/range";

const FETCH_CARDID_START = "FETCH_CARDID_START";
const FETCH_CARDID_SUCCESS = "FETCH_CARDID_SUCCESS";
const FETCH_CARDID_FAIL = "FETCH_CARDID_FAIL";

const getCardID = () => dispatch => {
    dispatch({ type: FETCH_CARDID_START });
    axios.get(`https://rapidapi.com/omgvamp/api/hearthstone?apiKey=${process.env.REACT_APP_CARDID_KEY}`)
    // .then (res => console.log(res))
    .then (res => dispatch({ type: FETCH_CARDID_SUCCESS, PAYLOAD: res.data}))
    .catch (err => dispatch({ type: FETCH_CARDID_FAIL, PAYLOAD: err.response}));
};
import axios from "axios";
import { dispatch } from "rxjs/internal/observable/range";

const FETCH_CARDID_START = "FETCH_CARDID_START";
const FETCH_CARDID_SUCCESS = "FETCH_CARDID_SUCCESS";
const FETCH_CARDID_FAIL = "FETCH_CARDID_FAIL";

const getCardID = () => dispatch => {
    dispatch({ type: FETCH_CARDID_START });
    axios.get("https://rapidapi.com/omgvamp/api/hearthstone?apiKey=526395db8emshdb6e39fb34ce32bp162132jsn16ecdb8b1bee")
    .then (res => console.log(res))
    .catch (err => console.log(err))

};
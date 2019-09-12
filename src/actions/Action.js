import axios from "axios";

export const FETCH_CARDID_START = "FETCH_CARDID_START";
export const FETCH_CARDID_SUCCESS = "FETCH_CARDID_SUCCESS";
export const FETCH_CARDID_FAIL = "FETCH_CARDID_FAIL";

export const getCardID = (selection) => dispatch => {
    // console.log("testing");
    dispatch({ type: FETCH_CARDID_START });
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "526395db8emshdb6e39fb34ce32bp162132jsn16ecdb8b1bee"
	}
})
    .then(response => {
        return response.json();
    })
    .then (res => {
        // console.log("successful fetch", res.Classic)
        console.log(res);
        dispatch({ type: FETCH_CARDID_SUCCESS, payload: res[selection]})
    })
    .catch (err => {
        // console.log("ERRORRRRRR", err)
        dispatch({ type: FETCH_CARDID_FAIL, payload: err.response})
    });
};



// fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "526395db8emshdb6e39fb34ce32bp162132jsn16ecdb8b1bee"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(res=>{
//   console.log(res);
// })
// .catch(err => {
// 	console.log("error", err);
// });
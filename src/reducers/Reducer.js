import { FETCH_CARDID_START, FETCH_CARDID_SUCCESS, FETCH_CARDID_FAIL } from '../actions/Action';

const initialState = {
    error: "",
    loading: false,
    cards: null
};

const reducer = (state = initialState, action) => {
    // console.log('action', action);
    switch(action.type) {
        case FETCH_CARDID_START:
            return {
                ...state,
                error: "",
                loading: true
            };
        case FETCH_CARDID_SUCCESS:
            console.log("RUNNING HERE");
            console.log(action.payload)
            return {
                // ...state,
                error: "",
                loading: false,
                cards: action.payload,
            };
        case FETCH_CARDID_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
                cardID: null
            };
        default:
            return state;
    }
};

export default reducer;
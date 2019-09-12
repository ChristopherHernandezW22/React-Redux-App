import { FETCH_CARDID_START, FETCH_CARDID_SUCCESS, FETCH_CARDID_FAIL } from '../actions/Action';

const initialState = {
    cardID: null,
    error: "",
    loading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARDID_START:
            return {
                ...state,
                error: "",
                loading: true
            };
        case FETCH_CARDID_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                cardID: action.payload
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
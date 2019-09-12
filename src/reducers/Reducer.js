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
        default:
            return state;
    }
};

export default reducer;
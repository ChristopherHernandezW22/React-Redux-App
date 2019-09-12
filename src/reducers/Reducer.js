import { FETCH_CARDID_START, FETCH_CARDID_SUCCESS, FETCH_CARDID_FAIL } from '../actions/Action';

const initialState = {
    cardID: null,
    error: "",
    loading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default reducer;
import { combineReducers } from "redux";
import { FETCH_CURRENCY_EXCHANGE_RATE_SUCCESS } from "./actions";

const initialCurrencyState = {
    result: '',
}
const currencyReducer = (state = initialCurrencyState, action) => {
    switch (action.type) {
        case FETCH_CURRENCY_EXCHANGE_RATE_SUCCESS:
            return {
                ...state,
                result:action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currency: currencyReducer,
})

export default rootReducer

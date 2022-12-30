import { combineReducers } from "redux";
import {FETCH_CURRENCY_EXCHANGE_RATE_SUCCESS, ABC, FETCH_CURRENCY, CONVERT_CURRENCY} from "./actions";

const initialCurrencyState = {
    result: '',
    currency:'',
    secondCurrency:''
}
const currencyReducer = (state = initialCurrencyState, action) => {
    switch (action.type) {
        case FETCH_CURRENCY_EXCHANGE_RATE_SUCCESS:
            return {
                ...state,
                result:action.payload
            }
        case FETCH_CURRENCY:
            return {
                ...state,
                currency:action.payload
            }
        case CONVERT_CURRENCY:
            return {
                ...state,
                secondCurrency:action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currency: currencyReducer,
})

export default rootReducer

export function fetchCurrencyExchangeRate(baseCurrency, targetCurrency,amount) {
    console.log("baseCurrency:",baseCurrency)
    console.log("targetCurrency:",targetCurrency)
    console.log("amount:",amount)
  return function(dispatch) {
    var myHeaders = new Headers();
    // myHeaders.append("apikey", "AwNIeh6vaHdWqLzuZ6NyqoRMxGrBHOlR");
    myHeaders.append("apikey", "y3eP6Z289KJou3mOaPbmuTiDKTMaVgsK");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch(`https://api.apilayer.com/fixer/convert?to=${baseCurrency}&from=${targetCurrency}&amount=${amount}`,requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log("Result:",data)
          // Dispatch an action with the exchange rate data
          dispatch({ type: 'FETCH_CURRENCY_EXCHANGE_RATE_SUCCESS', payload: data });
        })
        .catch(error => {
          // Dispatch an action with the erro
          dispatch({ type: 'FETCH_CURRENCY_EXCHANGE_RATE_ERROR', error });
        });
  }
}
export const FETCH_CURRENCY_EXCHANGE_RATE_SUCCESS = 'FETCH_CURRENCY_EXCHANGE_RATE_SUCCESS';

export function selectCurreny(data){
    return function(dispatch) {
        dispatch({ type: 'FETCH_CURRENCY', payload: data })
    }
}
export const FETCH_CURRENCY = 'FETCH_CURRENCY';
export function convertCurrency(data){
    return function(dispatch) {
        dispatch({ type: 'CONVERT_CURRENCY', payload: data })
    }
}
export const CONVERT_CURRENCY = 'CONVERT_CURRENCY';

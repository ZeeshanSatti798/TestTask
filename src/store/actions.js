export function fetchCurrencyExchangeRate(baseCurrency, targetCurrency,amount) {
  return function(dispatch) {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "AwNIeh6vaHdWqLzuZ6NyqoRMxGrBHOlR");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch(`https://api.apilayer.com/fixer/convert?to=${baseCurrency}&from=${targetCurrency}&amount=${amount}`,requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log("Result:",data?.result)
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

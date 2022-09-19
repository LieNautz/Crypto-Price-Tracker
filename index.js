fetch("https://api.coincap.io/v2/assets/")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  });

let bitcoinData = fetch("https://api.coincap.io/v2/assets/bitcoin")
  .then(function (responseFromApi) {
    return responseFromApi.json();
  })
  .then(function (resp) {
    // resp.data.priceUsd;
    if (!resp) return;
    if (!resp.data) return;
    if (!resp.data.priceUsd) return;
    const price = parseFloat(resp.data.priceUsd);
    // if (isNaN(price)) return;
    document.getElementById("bitcoin-span").innerText = price.toFixed(2);
    console.log(resp);
  });

//if (!resp) is basically checking if the response returns a null or undefined returns nothing otherwise if its true return response, will return data array
//The data in the object is actually stored as a string, so the price of bitcoin that was pulled from the API is stored as a string.
//Remember that Int means interger(a whole number) and a float (number with decimals)
//parseFloat(resp.data.priceUsd) is converting the string to a float number.
//toFixed(2) is limiting the float number to 2 decimal places.

let ethereumPrice = fetch("https://api.coincap.io/v2/assets/ethereum")
  .then(function (responseFromApi) {
    return responseFromApi.json();
  })
  .then(function (resp) {
    if (!resp) return;
    if (!resp.data) return;
    if (!resp.data.priceUsd) return;
    const price = parseFloat(resp.data.priceUsd);
    document.getElementById("ethereum-span").innerHTML = price.toFixed(2);
  });

let polygonPrice = fetch("https://api.coincap.io/v2/assets/polygon")
  .then(function (responseFromApi) {
    return responseFromApi.json();
  })
  .then(function (resp) {
    if (!resp) return;
    if (!resp.data) return;
    if (!resp.data.priceUsd) return;
    const price = parseFloat(resp.data.priceUsd);
    document.getElementById("polygon-span").innerHTML = price.toFixed(2);
  });

let usdc = fetch("https://api.coincap.io/v2/assets/usd-coin")
  .then(function (responseFromApi) {
    return responseFromApi.json();
  })
  .then(function (resp) {
    if (!resp) return;
    if (!resp.data) return;
    if (!resp.data.priceUsd) return;
    const price = parseFloat(resp.data.priceUsd);
    document.getElementById("usdc-span").innerHTML = price.toFixed(2);
  });

let solanaPrice = fetch("https://api.coincap.io/v2/assets/solana")
  .then(function (responseFromApi) {
    return responseFromApi.json();
  })
  .then(function (resp) {
    if (!resp) return;
    if (!resp.data) return;
    if (!resp.data.priceUsd) return;
    const price = parseFloat(resp.data.priceUsd);
    document.getElementById("sol-span").innerHTML = price.toFixed(2);
  });

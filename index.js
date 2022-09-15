fetch("https://api.coincap.io/v2/assets/")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  });

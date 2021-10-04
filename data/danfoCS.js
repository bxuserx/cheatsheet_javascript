// Using Apollo
//console.log(`Hello World`)
//console.log(Date(1633369613))



function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

async function getPrices(){
  let response = await fetch("https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?symbol=TSLA&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yh-finance.p.rapidapi.com",
        "x-rapidapi-key": "b645a87ea2mshd317d889bf173d6p101ee7jsn7c0cefcebb4e"
      },
    });

  let jsonData = await response.json();


  // ---- Vanilla Javascript operations ---- //
  //console.log(typeof(jsonData))                 // Determining jsonData type.
  //console.log(jsonData);                        // object: eventsData, firstTradeDate, prices, timeZone.
  console.log(jsonData.prices);                   // object: date, open, high, low, close, adjclose, volume
  priceClose = jsonData.prices.map(x => x.close); // Array: Close prices
  //console.log(priceClose);
  //console.log(priceClose[1]);                   // Number: Single entry close price

  isJson(jsonData.prices)

  // Danfo.js Dataframes / tensors
  const dfPrice = new dfd.DataFrame(jsonData.prices);
  console.log(dfPrice)
  let closed = dfPrice.close
  console.log(closed)
  //dfPrice = await dfd.read_json(jsonData);

  let layout = {
    title: 'A financial chart',
    xaxis: {title: 'Date'},
    yaxis: {title: 'Count'}
  }

    new_df = dfPrice.set_index({ column: "date" })
    new_df.plot("plot_div").line({ columns: ["open", "high"], layout: layout })

}


getPrices();






const fx = () => {
    let number = document.getElementById("number").value;
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${number}&page=1&sparkline=false`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coingecko.p.rapidapi.com",
          "x-rapidapi-key":
          "692207958amsh2848ad084f38c81p156f04jsnab09ed0b015e",
        },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((obj) => {


  let main_div = document.getElementById("main_table");
  var row = document.createElement("tr");
  let arr = ['Symbol','Name','ID','Current Price','Market Cap','High','Low'];
  arr.map((element)=>{
    var cell = document.createElement("th");
    var data = document.createTextNode(`${element}`);
    cell.appendChild(data);
    row.append(cell);
  })
  main_div.appendChild(row);
  
      for (var i = 0; i < number; i++) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var data = document.createElement("img");
      
        data.src = `${obj[i].image}`;
        data.style.height="100px";

        cell.appendChild(data);
        row.append(cell);

        cell = document.createElement("td");
        data = document.createTextNode(`${obj[i].name}`);
        cell.appendChild(data);
        row.append(cell);

        cell = document.createElement("td");
        data = document.createTextNode(`${obj[i].id}`);
        cell.appendChild(data);
        row.append(cell);

        cell = document.createElement("td");
        data = document.createTextNode(`${obj[i].current_price}`);
        cell.appendChild(data);
        row.append(cell);

        cell = document.createElement("td");
        data = document.createTextNode(`${obj[i].market_cap}`);
        cell.appendChild(data);
        row.append(cell);

        cell = document.createElement("td");
        data = document.createTextNode(`${obj[i].high_24h}`);
        cell.appendChild(data);
        row.append(cell);

        cell = document.createElement("td");
        data = document.createTextNode(`${obj[i].low_24h}`);
        cell.appendChild(data);
        row.append(cell);

        main_div.appendChild(row);
      }

      console.log(obj);
    })
    .catch((err) => {
      console.error(err);
    });
};
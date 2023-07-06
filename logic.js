const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "aa1c6b34c6mshf54b4fc8d7e5e1cp14d99ejsn486d3f64d489",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

let mainfunc = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      let cloud_pct = `${result.temp}`;
      let max_temp = `${result.max_temp}`;
      let min_temp = `${result.min_temp}`;
      let humidity = `${result.humidity}`;
      let wind_degrees = `${result.wind_degrees}`;
      let wind_speed = `${result.wind_speed}`;
      // let cloud_pct = `${result.temp}`;sub
      document.getElementById("cloud_pct").innerHTML = cloud_pct;
      document.getElementById("max_temp").innerHTML = max_temp;
      document.getElementById("min_temp").innerHTML = min_temp;
      document.getElementById("humidity").innerHTML = humidity;
      document.getElementById("wind_degrees").innerHTML = min_temp;
      document.getElementById("wind_speed").innerHTML = wind_speed;
    });
};
let cityweather = (e) => {
  event.preventDefault();

  let city_input = document.getElementById("city_input").value;
  let city_input2 = `${city_input}`;
  document.getElementById("cityName").innerHTML = city_input2;
  mainfunc(`${city_input}`);
};
mainfunc("Lahore");

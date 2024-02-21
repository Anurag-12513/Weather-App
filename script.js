const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e4084d0d0amshe716dd54bf90864p16a7b4jsnc8f74c62e370",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather=(city)=>{

  cityName.innerHTML= city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
    )
    .then((response) => response.json())
    .then((response) => {
      // (cloud_pct.innerHTML = response.cloud_pct),
      console.log(response),
      (temp.innerHTML = response.temp),
      (feels_like.innerHTML = response.feels_like),
      (humidity.innerHTML = response.humidity),
      (min_temp.innerHTML = response.min_temp),
      (max_temp.innerHTML = response.max_temp),
      (wind_speed.innerHTML = response.wind_speed),
      (wind_degrees.innerHTML = response.wind_degrees),
      (sunrise.innerHTML = response.sunrise),
      (sunset.innerHTML = response.sunset);
      
      //we can do it by our old method too
      // document.getElementById('temp').innerHTML=response.temp
      
      document.getElementById("big_temp").innerHTML = response.temp;
      document.getElementById("big_humidity").innerHTML = response.humidity;
      document.getElementById("big_wind").innerHTML = response.wind_speed;
    })
    
    .catch((err) => console.log(err));
    
  }

 srch.addEventListener("click", (event)=>{
   getWeather(city.value)
   event.preventDefault();
 })

 getWeather("kolkata")
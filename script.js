let defaultCity = "London";
let inputCity = document.querySelector(".search_city");
inputCity.defaultValue = defaultCity;
let searchBtn = document.querySelector(".search_button");
let temp = document.querySelector(".valuetod");
let yourloc = document.querySelector(".your_location");

searchBtn.addEventListener("click", () => {
  let searchCity = inputCity.value;
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=metric&appid=601a22d6f2fba9490c0f1a7220ae0da7`
  );

  xhr.onload = function () {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      console.log(response);
      for (let i = 0; i < 5; i++) {
        document.querySelector("#day" + (i + 1)).innerHTML =
          parseInt(Number(response.list[i].main.temp));
        /*let weathericon = response.list[i].weather[0].icon;
        weathericn.src = "https://openweathermap.org/img/wn/"+weathericon+".png";
        /*console.log(weathericon)*/
      }
      let city = response.city.name;
      yourloc.innerHTML = city;
    } else {
      console.log("Error");
    }
  };

  xhr.send();
});

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
        document.querySelector("#day" + (i + 1)).innerHTML = parseInt(
          Number(response.list[i].main.temp)
        );
        document.querySelector("#desc" + (i + 1)).innerHTML =
          response.list[i].weather[0].description;
        document.querySelector("#humidity" + (i + 1)).innerHTML = Number(
          response.list[i].main.humidity
        );
      }

      /*let weathericon = response.list[i].weather[0].icon;
        weathericn.src = "https://openweathermap.org/img/wn/"+weathericon+".png";
        /*console.log(weathericon)*/
      let city = response.city.name;
      yourloc.innerHTML = city;
    } else {
      alert("Something is wrong");
    }
  };

  xhr.send();
});
const d = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}
for (i = 0; i < 5; i++) {
  document.querySelector("#days" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

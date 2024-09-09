import "./style.css";

const key = `QARTB88LAKL4DR7RPNDA87UZF`;
const location = document.querySelector("#city");

async function getWeather(e) {
  e.preventDefault();
  const place = location.value;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${key}`;
  try {
    const res = await fetch(url, { mode: "cors" });
    const weather = await res.json();
    const { currentConditions, days, address } = weather;
    const { windspeed, temp, humidity, conditions, precipprob } =
      currentConditions;
    const today = days[0].datetime;
    const dateObj = new Date(today);
    const opt = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-us", opt);
  } catch (err) {
    console.log(err);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", getWeather);

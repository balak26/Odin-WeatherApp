import "./style.css";

const key = `QARTB88LAKL4DR7RPNDA87UZF`;
const place = "turin";
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${key}`;
(async function getWeather() {
  try {
    const res = await fetch(url, { mode: "cors" });
    const weather = await res.json();
    console.log(weather.currentConditions);
  } catch (err) {
    console.log(err);
  }
})();

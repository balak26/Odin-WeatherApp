import "./style.css";

const key = `QARTB88LAKL4DR7RPNDA87UZF`;
const location = document.querySelector("#city");
const card = document.querySelector(".card");
const result = document.querySelector(".result");

function ui(date, temp, address, conditions, windspeed, humidity, precipprob) {
  if (precipprob < 20) {
    card.style.backgroundColor = "orange";
    result.style.backgroundColor = "orange";
  } else if (precipprob > 20 && precipprob <= 50) {
    card.style.backgroundColor = "gray";
    result.style.backgroundColor = "gray";
  } else if (precipprob > 50 && precipprob <= 80) {
    card.style.backgroundColor = "#3C52AD";
    result.style.backgroundColor = "#3C52AD";
  } else if (precipprob > 80) {
    card.style.backgroundColor = "#000";
    result.style.backgroundColor = "#000";
  }
  // Heading
  const heading = document.createElement("div");
  heading.classList.add("heading");
  const headingH4 = document.createElement("h4");
  headingH4.innerHTML = date;
  heading.appendChild(headingH4);
  card.appendChild(heading);

  // Content
  const formattedTemp = Math.round(temp);
  const content = document.createElement("div");
  content.classList.add("content");
  const contentH2 = document.createElement("h2");
  contentH2.innerHTML = formattedTemp + "°F";
  content.appendChild(contentH2);
  const contentH3 = document.createElement("h3");
  contentH3.innerHTML = address;
  content.appendChild(contentH3);
  const contentH5 = document.createElement("h5");
  contentH5.innerHTML = conditions;
  content.appendChild(contentH5);
  card.appendChild(content);

  // Readings

  const readings = document.createElement("div");
  readings.classList.add("readings");
  const formattedWindSpeed = Math.round(windspeed);
  const formattedHumidity = Math.round(humidity);
  const formattedPreci = Math.round(precipprob);
  readings.innerHTML = ` <div class="reading">
              <h3>${formattedWindSpeed} Km/h</h3>
              <h5>Wind</h5>
            </div>
            <div class="reading">
              <h3>${formattedHumidity}%</h3>
              <h5>Humidity</h5>
            </div>
            <div class="reading">
              <h3>${formattedPreci}%</h3>
              <h5>Rain</h5>
            </div>`;
  card.appendChild(readings);
}

async function getWeather(e) {
  e.preventDefault();
  const place = location.value;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${key}`;
  try {
    const res = await fetch(url, { mode: "cors" });
    const weather = await res.json();
    console.log(weather);

    const { currentConditions, days, address } = weather;
    const { windspeed, temp, humidity, conditions, precipprob } =
      currentConditions;
    const today = days[0].datetime;
    const dateObj = new Date(today);
    const opt = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-us", opt);

    while (card.firstChild) {
      card.removeChild(card.lastChild);
    }
    ui(
      formattedDate,
      temp,
      address,
      conditions,
      windspeed,
      humidity,
      precipprob
    );
  } catch (err) {
    console.log(err);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", getWeather);

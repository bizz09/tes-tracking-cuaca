const weatherAPI =
  "http://api.weatherapi.com/v1/current.json?key=c40fc3ba6ed34572b9020421230502&aqi=no";
const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");

const container = document.getElementById('container')

btnSearch.onclick = () => {
  fetch(`${weatherAPI}&q=${keyword.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let element = ''

      element = showElement(data)

      container.innerHTML = element
    });
};

function showElement(data) {
  return `<h2>${data.location.name}, ${data.location.region}, ${data.location.country}</h2>
    <div class="box">
        <img src="https:${data.current.condition.icon}" alt="">
        <h1>${data.current.temp_c} ℃</h1>
    </div>
    <p>${data.current.last_updated}</p>
    <p>${data.current.condition.text}</p>
`}

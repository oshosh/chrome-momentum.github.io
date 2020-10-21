const weather = document.querySelector('.js-weather')
const COORDS = 'coords';
const API_KEY = '80eed3730d50414eb765296163a2b380';

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const temperature = json.main.temp
            const place = json.name
            weather.innerText = `${temperature}도 @ ${place}`
            weather.style.color = 'white'
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    const coordsObj = { latitude, longitude }
    saveCoords(coordsObj)
    getWeather(latitude, longitude)
}

function handleGeoError() {
    console.log('error')
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS)
    if (loadedCoords === null || loadedCoords === undefined) {
        askForCoords()
    } else {
        const parseCoords = JSON.parse(loadedCoords)
        console.log(parseCoords)

        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords()
}

init()
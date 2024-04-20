const tempo = document.querySelector('#weather');
const york = document.querySelector('.newYork');
const london = document.querySelector('.london');
const paris = document.querySelector('.paris');

class WeatherView {
    showWeather(weatherData) {
        tempo.innerHTML = `
            <div class="content">
            <h1>${weatherData.name}</h1>
            <h2>${weatherData.main.temp}°C</h2>
            <div class="minmax">
                <p>Máx: ${weatherData.main.temp_max}°</p>
                <p>Mín: ${weatherData.main.temp_min}°</p>
            </div>
            <p>💧: ${weatherData.main.humidity}%</p>
            <p>tempo: ${weatherData.weather[0].description}</p>
            <p>💨: ${weatherData.wind.speed}km/h</p>
            </div>
        `
    }

    showNewYork(weatherData) {
        york.innerHTML = `
            <div class="content">
            <h1>${weatherData.name}</h1>
            <h2>${weatherData.main.temp}°C</h2>
            <div class="minmax">
                <p>Máx: ${weatherData.main.temp_max}°</p>
                <p>Mín: ${weatherData.main.temp_min}°</p>
            </div>
            <p>💧: ${weatherData.main.humidity}%</p>
            <p>tempo: ${weatherData.weather[0].description}</p>
            <p>💨: ${weatherData.wind.speed}km/h</p>
            </div>
        `
    }

    showLondon(weatherData) {
        london.innerHTML = `
            <div class="content">
            <h1>${weatherData.name}</h1>
            <h2>${weatherData.main.temp}°C</h2>
            <div class="minmax">
                <p>Máx: ${weatherData.main.temp_max}°</p>
                <p>Mín: ${weatherData.main.temp_min}°</p>
            </div>
            <p>💧: ${weatherData.main.humidity}%</p>
            <p>tempo: ${weatherData.weather[0].description}</p>
            <p>💨: ${weatherData.wind.speed}km/h</p>
            </div>
        `
    }

    showParis(weatherData) {
        paris.innerHTML = `
            <div class="content">
            <h1>${weatherData.name}</h1>
            <h2>${weatherData.main.temp}°C</h2>
            <div class="minmax">
                <p>Máx: ${weatherData.main.temp_max}°</p>
                <p>Mín: ${weatherData.main.temp_min}°</p>
            </div>
            <p>💧: ${weatherData.main.humidity}%</p>
            <p>tempo: ${weatherData.weather[0].description}</p>
            <p>💨: ${weatherData.wind.speed}km/h</p>
            </div>
        `
    }
}
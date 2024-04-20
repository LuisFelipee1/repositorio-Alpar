class WeatherService {
    async request(param) {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=c05e646600469c338e44738a1fb42d3e&units=metric`);
            const response = await data.json();
            const dados = new WeatherModel();
            const view = new WeatherView();
            view.showWeather(response);
            console.log(response);
            return dados;
        } catch (error) {
            return error.message;
        }
    }

    async requestNewYork() {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=c05e646600469c338e44738a1fb42d3e&units=metric`);
            const response = await data.json();
            const view = new WeatherView();
            view.showNewYork(response);
            console.log(response);
            return dados;
        } catch (error) {
            return error.message;
        }
    }

    async requestlondon() {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=c05e646600469c338e44738a1fb42d3e&units=metric`);
            const response = await data.json();
            const view = new WeatherView();
            view.showLondon(response);
            console.log(response);
            return dados;
        } catch (error) {
            return error.message;
        }
    }

    async requestParis() {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=paris&appid=c05e646600469c338e44738a1fb42d3e&units=metric`);
            const response = await data.json();
            const view = new WeatherView();
            view.showParis(response);
            console.log(response);
            return dados;
        } catch (error) {
            return error.message;
        }
    }
}
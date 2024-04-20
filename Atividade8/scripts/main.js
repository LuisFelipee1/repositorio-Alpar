const input = document.querySelector('#inputCity');
const btnSearch = document.querySelector('#btnSearch')
const controller = new WeatherController();
const service = new WeatherService();

service.requestNewYork();
service.requestlondon();
service.requestParis();

btnSearch.addEventListener('click', () => {
    controller.showData();
});

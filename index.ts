import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
const apiKey: string = 'd0475be3a1967b1b49dfc02c8128001a';
const URL: string =
  'https://api.openweathermap.org/data/2.5/weather?APPID=' +
  apiKey +
  '&units=metric&q=';
var city: string = 'Pisa';
const request: AjaxRequest = {
  url: URL + city,
  crossDomain: true,
};
const obs: Observable<AjaxResponse> = ajax(request);
obs.subscribe({
  next: (res: AjaxResponse) =>
    (document.getElementById('output').innerHTML = res.response.main.temp),
  error: (err: AjaxError) => console.error(err.message),
});

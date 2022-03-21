import { ajax, AjaxResponse } from 'rxjs/ajax';

const apiKey = "d0475be3a1967b1b49dfc02c8128001a";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
var city="Pisa";

const obs = ajax(URL + city);
const subscribe = obs.subscribe({
  next: ( res: AjaxResponse ) => document.getElementById("output").innerHTML=res.response.main.temp,
  error: ( err: Error ) => console.error(err.message)
});
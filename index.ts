import { Observable } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';

const apiKey : string = "d0475be3a1967b1b49dfc02c8128001a";
const URL: string =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
var city: string ="Pisa";

const obs: Observable<AjaxResponse> = ajax({
  url: URL + city,
  crossDomain: true
});
obs.subscribe({
  next: ( res: AjaxResponse ) => document.getElementById("output").innerHTML=res.response.main.temp,
  error: ( err: Error ) => console.error(err.message)
});
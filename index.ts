import { ajax } from 'rxjs/ajax';

const apiKey = "9bd419b49d4261031516ad5fddac3439";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";

var city="Pisa";

const temp = ajax(URL + city);

const subscribe = temp.subscribe(
  res => console.log(res),
  err => console.error(err)
);
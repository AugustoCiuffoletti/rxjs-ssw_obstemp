import { ajax } from 'rxjs/ajax';

const apiKey = "d0475be3a1967b1b49dfc02c8128001a";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";

var city="Pisa";

const temp = ajax(URL + city); //Costruisco l'observable

const subscribe = temp.subscribe( // Collego un subscriber
  res => document.getElementById("output").innerHTML=res.response.main.temp,
  err => console.error(err)
);
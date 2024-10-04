/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = function() {
  let first = "El ";
  let adj = [
    "gato volador ",
    "superhéroe ",
    "rápido ",
    "fantasma ",
    "extraño ",
    "invisible ",
    "bailarín ",
    "chistoso ",
    "temeroso ",
  ];

  let noun = [
    "dragón ",
    "unicornio ",
    "científico ",
    "bombero ",
    "futbolista ",
    "escritor ",
    "robot ",
  ];

  let action = [
    "robó mi ",
    "pintó mi ",
    "saltó sobre mi ",
    "me preguntó por mi ",
    "comió mi ",
    "destruyó mi ",
    "escondió mi ",
  ];

  let possetion = [
    "mesa ",
    "casa ",
    "computadora ",
    "retrato ",
    "zapatos ",
    "mochila ",
    "juguete ",
    "libro ",
    "pintura ",
    "pluma ",
  ];

  let where = [
    "en el cine",
    "en la playa",
    "en el parque",
    "en un concierto",
    "en el zoológico",
    "en una fiesta",
    "en el museo",
  ];

  let v1 = Math.floor(Math.random() * adj.length);
  let v2 = Math.floor(Math.random() * noun.length);
  let v3 = Math.floor(Math.random() * action.length);
  let v4 = Math.floor(Math.random() * possetion.length);
  let v5 = Math.floor(Math.random() * where.length);

  document.querySelector("#excuse").innerHTML =
    first + adj[v1] + noun[v2] + action[v3] + possetion[v4] + where[v5];
};

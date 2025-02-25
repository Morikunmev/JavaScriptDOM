import paisesAmerica from "./paises.js";

document.querySelector("#paises").innerHTML = paisesAmerica.map(pais =>`<option>${pais}</option>`).join("")
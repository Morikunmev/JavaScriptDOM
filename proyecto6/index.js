import { recuperarArticulos } from "./articulos.js";
import { agregarAlCarrito } from "./carrrito.js";

recuperarArticulos((articulos) => {
  const listaarticulos = document.querySelector("#listadoarticulos");
  articulos.forEach((articulo) => {
    const li = document.createElement("li");
    li.innerText = `${articulo.descripcion} - ${articulo.precio}`;

    const btn = document.createElement("button");
    btn.innerHTML = "+";

    btn.addEventListener("click", () => {
      agregarAlCarrito(articulo);
    });
    listaarticulos.appendChild(li);
    li.appendChild(btn);
  });
});

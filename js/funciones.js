const productos = [];
const tabla_prod = document.querySelector("#tabla-prod")
const botones = document.querySelectorAll(".caja > button");
let contador = 0;




botones.forEach((boton) => {
    boton.addEventListener("click", (eveto) => {
        eveto.preventDefault();
        const listado = boton.parentElement;
        const producto = {
            imagen: listado.querySelector("img").src,
            nombre: listado.querySelector("h3").textContent,
            precio: listado.querySelector(".caja-precio").textContent,
            cantidad: 1
        }
        aggProducto(producto);
    })

})
const aggProducto = (producto) => {

    const mostrar = {
        imagen: producto.querySelector("img").src,
        nombre: producto.querySelector("h3").textContent,
        precio: producto.querySelector(".caja-precio").textContent,
        id: producto.querySelector(".btn").getAttribute("data-id"),
        cantidad: 1
    }

    this.insertar(mostrar);
}
insertarCarrito(mostrar){
    const tabla = document.createElement("tr");
    tabla.innerHTML = tabla.innerHTML + `
                                <td> <img src"${producto.imagen}"></td>
                                <td>${producto.nombre}</td>
                                <td>${producto.precio}</td>
                                <td>${nota2.value}</td>
                                `;
    tabla_prod.appendChild(tabla);
}


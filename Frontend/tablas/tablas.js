import {obtenerDulces,obtenerDecoraciones,obtenerObjectos} from "./API.js"

document.addEventListener('DOMContentLoaded',()=>{
    loadDulces();
    loadDecoraciones();
    loadObjectos();
})

async function loadDulces(){
    const dulces = await obtenerDulces();
    const arrayDulces = dulces.dulces
    const contenedor = document.querySelector('#dulcesBody')
    console.log(arrayDulces);
    arrayDulces.forEach((elemnt) => {
        const {tipoDulce,precio,stock,proveedores} = elemnt
        contenedor.innerHTML += `
        <tr>
            <td>${tipoDulce}</td>
            <td>${precio}</td>
            <td>${stock}</td>
            <td>${proveedores}</td>
        </tr>`
    })
    
}

async function loadDecoraciones(){
    const decoraciones = await obtenerDecoraciones();
    const arraydecoraciones = decoraciones.decoraciones
    const contenedor = document.querySelector('#decoracionBody')
    console.log(arraydecoraciones);
    arraydecoraciones.forEach((elemnt) => {
        const {tipoDecoracion,precio,stock} = elemnt
        contenedor.innerHTML += `
        <tr>
            <td>${tipoDecoracion}</td>
            <td>${precio}</td>
            <td>${stock}</td>
        </tr>`
    })
}

async function loadObjectos(){
    const objectos = await obtenerObjectos();
    const arrayObjectos = objectos.objectos
    const contenedor = document.querySelector('#objectosBody')

    console.log(arrayObjectos);
    arrayObjectos.forEach((elemnt) => {
        const {tipoObjecto,precio,stock} = elemnt
        contenedor.innerHTML += `
        <tr>
            <td>${tipoObjecto}</td>
            <td>${precio}</td>
            <td>${stock}</td>
        </tr>`
    })
}
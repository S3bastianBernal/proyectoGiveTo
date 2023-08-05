import { deleteRegalo, obtenerRegalo } from "./API.js";

document.addEventListener('DOMContentLoaded',()=>{
    loadRegalos();
})

async function loadRegalos(){
    const regalos = await obtenerRegalo();
    const contenedor = document.querySelector('.containerCards');
    const arrayRegalos = regalos.regalos
    console.log(arrayRegalos);

    arrayRegalos.forEach((element) => {
        const {receptor,fecha,correo,dulces,flores,peluches,_id} = element
        contenedor.innerHTML += `
        <div class="myCard">
            <div class="innerCard">
                <div class="frontSide">
                    <p class="title">Regalo De:</p>
                    <p>${correo}</p>
                    <p>enviar el:</p>
                    <p>${fecha}</p>
                </div>
                <div class="backSide">
                    <p class="title">Para:</p>
                    <p>${receptor}</p>
                    <p>${dulces}</p>
                    <p>${flores}</p>
                    <p>${peluches}</p>
                    <a class="btn btn-danger eliminar" id="${_id}">Borrar</a>
                </div>
            </div>
        </div>
        `
    });
}

const eliminar = document.querySelector(".containerCards");
eliminar.addEventListener('click',borrar);

function borrar(e){
    if (e.target.classList.contains('eliminar')) {
        console.log(e.target);
        const idRegalo = e.target.getAttribute("id");
        console.log(idRegalo);
        const confir = confirm("Desea eliminar este Regalo");
        if (confir) {
            deleteRegalo(idRegalo);
        }
    }
}


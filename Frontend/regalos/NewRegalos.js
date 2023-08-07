import { obtenerDecoraciones, obtenerDulces, obtenerObjectos } from "../tablas/API.js";
import { newRegalo} from "./API.js";

document.addEventListener('DOMContentLoaded',()=>{
    llenadoSelect();
})

async function llenadoSelect() {
    const dulces = await obtenerDulces();
    const arrayDulces = dulces.dulces
    const dulcesContainer = document.querySelector('#dulces');
    arrayDulces.forEach((element) => {
        const {tipoDulce,precio} = element
        dulcesContainer.innerHTML += `
        <option value="${tipoDulce}">${tipoDulce}--$${precio}</option>
        `
    });
    const decoraciones = await obtenerDecoraciones();
    const arrayDecoraciones = decoraciones.decoraciones
    const decoracionesConatiner = document.querySelector('#flores');
    console.log(arrayDecoraciones);
    arrayDecoraciones.forEach((element) => {
        const {tipoDecoracion,precio} = element
        decoracionesConatiner.innerHTML += `
        <option value="${tipoDecoracion}">${tipoDecoracion}--$${precio}</option>
        `
    });
    const objectos = await obtenerObjectos();
    const arrayObjectos = objectos.objectos
    const objectosContainer = document.querySelector('#peluches');
    console.log(arrayObjectos);
    arrayObjectos.forEach((element) => {
        const {tipoObjecto,precio} = element
        objectosContainer.innerHTML += `
        <option value="${tipoObjecto}">${tipoObjecto}--$${precio}</option>
        `
    });


}



const AddGift = document.querySelector('#regaloPost');
AddGift.addEventListener('submit', agregarRegalo);

function agregarRegalo(e){
    e.preventDefault();
    const correo = document.querySelector('#correo').value;
    const fecha = document.querySelector('#fecha').value;
    const hora = document.querySelector('#hora').value;
    const detalles = document.querySelector('#detalles').value;
    const receptor = document.querySelector('#receptor').value;
    const dulces = document.querySelector('#dulces').value;
    const flores = document.querySelector('#flores').value;
    const peluches = document.querySelector('#peluches').value;
    const mensaje = document.querySelector('#mensaje').value;

    const data = {
        correo,
        fecha,
        hora,
        detalles,
        receptor,
        dulces,
        flores,
        peluches,
        mensaje
    }

    if (validate(data)) {
        return alert('Todos los campos son obligatorios')
        }

    newRegalo(data)


}


function validate(objeto){
    return !Object.values(objeto).every( element => element !== '');
}
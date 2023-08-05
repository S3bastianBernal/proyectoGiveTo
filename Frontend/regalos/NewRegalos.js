import { newRegalo, obtenerRegalo } from "./API.js";





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

    const data = {
        correo,
        fecha,
        hora,
        detalles,
        receptor,
        dulces,
        flores,
        peluches
    }

    if (validate(data)) {
        return alert('Todos los campos son obligatorios')
        }

    newRegalo(data)


}


function validate(objeto){
    return !Object.values(objeto).every( element => element !== '');
}
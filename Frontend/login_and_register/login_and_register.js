import { logUser, newRegister } from "./API.js";

const registerForm = document.querySelector('#formRegister');
registerForm.addEventListener('submit',validateRegister)

//creacion de nuevo usuario con mensaje de bienvenida al correo(porfavor poner correos reales);

function validateRegister(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const correo = document.querySelector('#correo').value;
    const preferencias = document.querySelector('#preferencias').value;
    const telefono = document.querySelector('#telefono').value;
    const edad = document.querySelector('#edad').value;
    const contraseña = document.querySelector('#contraseña').value;

    const resgister = {
        nombre,
        correo,
        preferencias,
        telefono,
        edad,
        contraseña
    }

    if (validate(resgister)) {
    return alert('Todos los campos son obligatorios')
    }

    newRegister(resgister);
}

function validate(objeto){
    return !Object.values(objeto).every( element => element !== '');
}

//validacion del login del usuario

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', loginUser);

function loginUser(e){
    e.preventDefault();
    const correo = document.querySelector('#correoLogin').value;
    const contraseña = document.querySelector('#contraseñaLogin').value;

    const data = {
        correo,
        contraseña
    }

    if (!correo || !contraseña) {
        return alert('Todos los campos son obligatorios')
    }

    logUser(data);
}
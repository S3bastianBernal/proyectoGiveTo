
const btnCerrar = document.querySelector('.logOut')
btnCerrar.addEventListener('click',cerrarSecion)

function cerrarSecion(e){
    e.preventDefault();
    const confir = confirm("Desea Cerrar Seccion");
        if (confir) {
            localStorage.clear('token')
            window.location.href = "../login_and_register/index.html"
        }
}
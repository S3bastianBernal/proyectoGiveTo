const url = 'http://localhost:4500/api/usuarios/';
const urlLogin = 'http://localhost:4500/api/auth/login';

export const newRegister = async (data) =>{
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type':'application/json'}
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const logUser = async (data) =>{
    try {
        const response = await fetch(urlLogin,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type':'application/json'}
        });

        const responseError = await response.json();
        alert(responseError.msg);
        
        console.log("Bienvenido " + responseError.usuario.nombre + " su token es " + responseError.token);
        
        localStorage.setItem('token', responseError.token)
        
        window.location.href = '../inicio/index.html'

    } catch (error) {
        console.log(error);
    }
}
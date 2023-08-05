const urlDulces = 'http://localhost:4500/api/listas/dulces'
const urlDecoraciones = 'http://localhost:4500/api/listas/decoracion'
const urlObjectos = 'http://localhost:4500/api/listas/objectos'


export const obtenerDulces = async () =>{
    try {
        const dulces = await fetch(urlDulces);
        const datosDulces = await dulces.json();
        return datosDulces
    } catch (error) {
        console.log(error);
    }
    
}

export const obtenerDecoraciones = async () =>{
    try {
        const decoraciones = await fetch(urlDecoraciones);
        const datosDecoraciones = await decoraciones.json();
        return datosDecoraciones
    } catch (error) {
        console.log(error);
    }
    
}

export const obtenerObjectos = async () =>{
    try {
        const objectos = await fetch(urlObjectos);
        const datosObjectos = await objectos.json();
        return datosObjectos
    } catch (error) {
        console.log(error);
    }
    
}
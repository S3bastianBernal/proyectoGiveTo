const url = "http://localhost:4500/api/regalos/";

export const obtenerRegalo = async () =>{
    try {
        const regalos = await fetch(url);
        const datosRegalos = await regalos.json();
        return datosRegalos
    } catch (error) {
        console.log(error);
    }
    
}

export const newRegalo = async (data) =>{
    try {
        const response = await fetch(url,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type':'application/json'}
        });
        
        const responseError = await response.json();
        console.log(responseError.msg);


        window.location.href = "formulario.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteRegalo = async (id) =>{
    try {
        await fetch(`${url}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};

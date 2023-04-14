// Url de la API que consumimos
const API = "https://jsonplaceholder.typicode.com/posts";
// CRUD
// obtener todos los posts
const getData = async (api) => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Algo fallo", error);
    }
};
// Creating a resource
const postData = async (api, data) => {
    try {
        const response = await fetch(api, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        
        return response.json();
    } catch (error) {
        console.error("no pudimos crear el post", error);
    }  
};
// Updating a resource
const putData = async (api, data) => {
    try {
        const response = await fetch(api, {
            method: 'PUT',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        
        return response.json();
    } catch (error) {
        console.error("no pudimos actualizar el post", error);
    }
}
// Deleting a resource
const deleteData = async (api) => {
    try {
        const response = await fetch(api, {
            method: 'DELETE'
        })
        
        return response.json();
    } catch (error) {
        console.error("no pudimos eliminar el post", error);
    }
}

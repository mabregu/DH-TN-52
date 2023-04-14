const contentPost = document.getElementById('post');

document.addEventListener('DOMContentLoaded', () => {
    getData(API)
        .then(data => payload(data))
        .catch(error => console.error(error))
    ;
    
    document.addEventListener('click', (evt) => {
        let element = evt.target.classList;
        
        if (evt.target.classList[0].includes("delete")) {
            const id = evt.target.dataset.id;
            
            if (!areYouSure("Estas seguro que queres borrar?")) return;
            
            deleteData(API + '/' + id)
                .then(data => {
                    console.log(data);
                    location.reload();
                })
                .catch(error => console.error(error))
            ;
        }
    });
});


/*
 * payload
 * @parms array posts
 */
function payload(posts) {
    let html = '';
    
    posts.forEach(post => {
        html += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button onclick="location.href='actualizar.html?id=${post.id}'">Actualizar</button>
                <button class="delete" data-id="${post.id}">Eliminar</button>
            </div>
        `
    });
    
    contentPost.innerHTML = html;
}

function areYouSure(msj) {
    return confirm(msj);
}
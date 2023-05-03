const btnSeguir = document.getElementById('seguir');
const btnMeGusta = document.getElementById('meGusta');
let botonPresionado = false;

btnSeguir.addEventListener('click', function(){
    if(btnSeguir.innerHTML === "Seguir"){
        btnSeguir.innerHTML = "Dejar de seguir";
    }else {
        btnSeguir.innerHTML = "Seguir";
    }
});

function sumarLike(){
    const meGustas = document.querySelector('.cantLikes');

    if(botonPresionado){
        meGustas.innerHTML--;
    }else{
        meGustas.innerText++;
    }
    botonPresionado = !botonPresionado;
};

const btnComentar = document.getElementById('comentar');

btnComentar.addEventListener('click', (evento) => {
    evento.preventDefault();

    const inpUsuario = document.getElementById('inpUsuario');
    const inpComentario = document.getElementById('inp-coment');
    const usuario = inpUsuario.value.trim();
    const comentario = inpComentario.value.trim();

    if(!usuario){
        Swal.fire({
            title: 'Alerta!',
            text: 'Recuede ingresar nombre de usuario',
            icon: 'warning',
            backdrop: true
        });
        return;
    }

    if(!comentario){
        Swal.fire({
            title: 'Alerta!',
            text: 'Recuede ingresar comentario',
            icon: 'warning',
            backdrop: true
        });
        return;
    }

    agregarComentario(usuario, comentario);
});

function agregarComentario(usuario, comentario){
    const contenedorComentarios = document.querySelector('.comentarios');
    const nuevoComentario = document.createElement('p');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.innerHTML = `<strong class="nombre">${usuario}</strong> ${comentario}`;
    const botonBorrar = document.createElement('button');
    botonBorrar.classList.add('btn-borrar');
    botonBorrar.innerText = "Eliminar";
    nuevoComentario.appendChild(botonBorrar);
    contenedorComentarios.appendChild(nuevoComentario);
    limpiarFormulario();

    botonBorrar.addEventListener('click', () => {
        contenedorComentarios.removeChild(nuevoComentario);
    })
}

function limpiarFormulario(){
    const inpUsuario = document.getElementById('inpUsuario');
    const inpComentario = document.getElementById('inp-coment');
    inpUsuario.value = "";
    inpComentario.value = "";
}
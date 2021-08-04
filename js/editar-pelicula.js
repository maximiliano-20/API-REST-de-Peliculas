import { mostrarAlertas } from './funciones.js';
import { mostrarPelicula,actualizarPelicula } from './api.js';

const nombreEditar = document.querySelector('#nombre');
const directorEditar = document.querySelector('#director');
const categoriaEditar = document.querySelector('#categoria');
const idEditar = document.querySelector('#id');


document.addEventListener('DOMContentLoaded', async () => {

	const parametros = new URLSearchParams(window.location.search);
	const peliculaId = parseInt( parametros.get('id') );
	const pelicula = await mostrarPelicula(peliculaId);

	pelis(pelicula);
	
	const formularioEditar = document.querySelector('#formulario');
    formularioEditar.addEventListener('submit', validarPelicula);
    

	

});


function pelis (pelicula) {
	const { id , nombre , director , categoria } = pelicula;
    
    idEditar.value = id;
	nombreEditar.value = nombre;
	directorEditar.value = director;
	categoriaEditar.value = categoria;
}



function validarPelicula (e) {
	e.preventDefault();
    
    const peliObj = {
    	id : parseInt( idEditar.value ),
    	nombre : nombreEditar.value,
    	director : directorEditar.value,
    	categoria : categoriaEditar.value
    }

    if (nombreEditar.value === '' || directorEditar.value === '' || categoriaEditar === '') {
    	mostrarAlertas('Todos los campos son obligatorios','error');
    	return;
    }

    actualizarPelicula(peliObj);

}
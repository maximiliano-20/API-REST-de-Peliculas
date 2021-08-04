import { mostrarAlertas } from './funciones.js';
import { agregarPeliculas } from './api.js';



const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarPelicula);



function validarPelicula (e) {
	e.preventDefault();

	const nombre = document.querySelector('#nombre').value;
    const director = document.querySelector('#director').value;
    const categoria = document.querySelector('#categoria').value;

	if (nombre === '' || director === '' || categoria === '') {
		mostrarAlertas('Son obligatorios los campos','error');
		return;
	}

	const peliObj = {
		nombre,
		director,
		categoria
	}

	agregarPeliculas(peliObj);
}


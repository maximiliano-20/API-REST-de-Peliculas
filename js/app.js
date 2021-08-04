import { mostrarPeliculas,eliminarPelicula  } from './api.js';
//import { mostrarCategorias } from './api-categoria.js';


const listadoPelis = document.querySelector('#listado-peliculas');
document.addEventListener('DOMContentLoaded', traerPeliculas);


listadoPelis.addEventListener('click', confirmarPelicula);



async function traerPeliculas () {
    
    const pelis = await mostrarPeliculas();
    console.log(pelis);
    
    pelis.forEach(peli => {
        const { nombre ,director,categoria,id } = peli;
        const fila = document.createElement('tr');

          fila.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${nombre} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${director}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${categoria}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-pelicula.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-id="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;
           
          listadoPelis.appendChild(fila);
       });

 } 


function confirmarPelicula (e) {
    
    if (e.target.classList.contains('eliminar')) {

       const idPelicula = e.target.dataset.id;

       eliminarPelicula(idPelicula);
    } 
}



function traerCategorias () {
    
    const categorias =  mostrarCategorias();
    console.log(categorias);
}

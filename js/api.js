const url = 'http://localhost:3000/peliculas';

const urlCategoria = 'http://localhost:3000/categorias';

export const mostrarCategorias = async () => {
	try {
		const respuesta = await fetch(urlCategoria);
		const categorias = await  respuesta.json();
		return categorias;
		console.log(categorias);

	} catch(e) {
		console.log(e);
	}
}


export const mostrarPeliculas = async () => {
	 try {
	 	const respuesta = await fetch(url);
	    const pelis = await respuesta.json();
	    return pelis;

	 } catch(e) {
	 	console.log(e);
	 }

}




export const agregarPeliculas = async (peliObj) => {
	try {

		const respuesta = await fetch(url,{
			method : 'POST',
			body : JSON.stringify(peliObj),
			headers : {
				"Content-Type" : "application/json"
			}
		});
		
		window.location.href='index.html';
		
	} catch(e) {
		console.log(e);
	}
}


export const eliminarPelicula = async (id) => {
     
    try {
    	const respuesta = await fetch(`${url}/${id}`,{
    		method : 'DELETE'
    	})
    	location.reload();

    } catch(e) {
    	console.log(e);
    }
}
export const mostrarPelicula = async (id) => {

	try {
		const respuesta = await fetch(`${url}/${id}`);
		const resultado = await respuesta.json();
		return resultado; 
	} catch(e) { 
		console.log(e);
	}
}

export const actualizarPelicula = async (peliObj) => {

	try {
		const respuesta = await fetch(`${url}/${peliObj.id}`,{
           method : 'PUT',
           body : JSON.stringify(peliObj),
           headers : {
           	  "Content-Type" : "application/json"
           }
		});
        
        window.location.href='index.html';
        console.log(peliObj);

	} catch(e) {
		console.log(e);
	}
}
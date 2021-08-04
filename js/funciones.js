
export function mostrarAlertas (mensaje,tipo) {
	
	const formulario = document.querySelector('#formulario');
	const alerta = document.querySelector('.alerta');

	if (!alerta) {

		const mensajeParrafo = document.createElement('p');
		mensajeParrafo.classList.add('px-4','py-3',
		'rounded','max-w-lg','mx-auto','mt-6','text-center');
	

		if (tipo === 'error') {
           
           mensajeParrafo.classList.add('bg-red-100','border-red-400','text-red-700');
		}else{
		   mensajeParrafo.classList.add('bg-green-100','border-green-400','text-green-700');
		}

		mensajeParrafo.textContent = mensaje;

		formulario.appendChild(mensajeParrafo);

		setTimeout(()=>{
             mensajeParrafo.remove();
		},3000)



	}
}
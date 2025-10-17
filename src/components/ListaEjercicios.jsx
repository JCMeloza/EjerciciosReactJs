import { Link } from "react-router-dom";

const ListaEjercicios = () => {
	const ejercicios = [
		{ path: "/ejercicio1", nombre: "1. Cambiador de Color" },
		{ path: "/ejercicio2", nombre: "2. Contador de Clics" },
		{ path: "/ejercicio3", nombre: "3. Lista Dinámica" },
		{ path: "/ejercicio4", nombre: "4. Filtro de Búsqueda" },
		{ path: "/ejercicio5", nombre: "5. Calculadora" },
		{ path: "/ejercicio6", nombre: "6. Temporizador" },
		{ path: "/ejercicio7", nombre: "7. Generador de Contraseñas" },
		{ path: "/ejercicio8", nombre: "8. Contador de Palabras" },
		{ path: "/ejercicio9", nombre: "9. Lista de Tareas" },
	];
	return (
		<div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">Ejercicios en React</h1>
			<ul className="space-y-3">
				{ejercicios.map((ejercicio, index) => (
					<li key={index}>
						<Link
							to={ejercicio.path}
							className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
						>
							{ejercicio.nombre}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListaEjercicios;

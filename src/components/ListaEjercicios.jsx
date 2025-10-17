import { Link } from "react-router-dom";

const ListaEjercicios = () => {
	return (
		<div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">Ejercicios en React</h1>
			<ul className="space-y-3">
				<li>
					<Link
						to="/ejercicio1"
						className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
					>
						1. Cambiador de Color
					</Link>
				</li>
				<li>
					<Link
						to="/ejercicio2"
						className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
					>
						2. Contador de Clics
					</Link>
				</li>
				<li>
					<Link
						to="/ejercicio3"
						className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
					>
						3. Lista Dinámica
					</Link>
				</li>
				<li>
					<Link
						to="/ejercicio4"
						className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
					>
						4. Filtro de Búsqueda
					</Link>
				</li>
				<li>
					<Link
						to="/ejercicio5"
						className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
					>
						5. Calculadora
					</Link>
				</li>
				<li>
					<Link
						to="/ejercicio6"
						className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
					>
						6. Temporizador
					</Link>
				</li>
				<li>
					<Link
						to="/ejercicio7"
						className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
					>
						7. Generador de Contraseñas
					</Link>
				</li>
				<li>
					<Link
						to="/ejercicio8"
						className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
					>
						8. Contador de Palabras
					</Link>
				</li>
				<li>
					<Link
						to="/ejercicio9"
						className="block p-3 bg-blue-100 hover:bg-blue-200 rounded transition"
					>
						9. Lista de Tareas
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ListaEjercicios;

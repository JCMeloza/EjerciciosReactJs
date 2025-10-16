import { Link } from "react-router-dom";
function App() {
	return (
		<>
			<div>
				<h1>Ejercicios en React</h1>
				<ul>
					<li>
						<Link to="/ejercicio1">1. Cambiador de Color</Link>
					</li>
					<li>
						<Link to="/ejercicio2">2. Contador de Clics</Link>
					</li>
					<li>
						<Link to="/ejercicio3">3. Lista Dinámica</Link>
					</li>
					<li>
						<Link to="/ejercicio4">4. Filtro de Búsqueda</Link>
					</li>
					<li>
						<Link to="/ejercicio5">5. Calculadora</Link>
					</li>
					<li>
						<Link to="/ejercicio6">6. Temporizador</Link>
					</li>
					<li>
						<Link to="/ejercicio7">7. Generador de Contraseñas</Link>
					</li>
					<li>
						<Link to="/ejercicio8">8. Contador de Palabras</Link>
					</li>
					<li>
						<Link to="/ejercicio9">9. Lista de Tareas</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;

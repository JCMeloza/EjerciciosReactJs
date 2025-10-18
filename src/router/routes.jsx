import { Routes, Route } from "react-router-dom";
import App from "../App";

// Importa  ejercicios
import Ejercicio1 from "../exercises/Ejercicio1";
import Ejercicio2 from "../exercises/Ejercicio2";
import Ejercicio3 from "../exercises/Ejercicio3";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/ejercicio1" element={<Ejercicio1 />} />
			<Route path="/ejercicio2" element={<Ejercicio2 />} />
			<Route path="/ejercicio3" element={<Ejercicio3 />} />
		</Routes>
	);
}

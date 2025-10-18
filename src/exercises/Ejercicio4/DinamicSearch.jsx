import Button from "../../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DinamicSearch() {
	const navigate = useNavigate();
	const handleGoHome = () => {
		navigate("/");
	};

	//lista de elementos para buscar
	const elementos = [
		"Manzana",
		"Banana",
		"Cereza",
		"Dátil",
		"Elderberry",
		"Higo",
		"Uva",
		"Kiwi",
		"Limón",
		"Mango",
		"Naranja",
		"Papaya",
		"Quince",
		"Frambuesa",
		"Fresa",
		"Tamarindo",
	];

	//Estado para el término de busqueda
	const [searchTerm, setSearchTerm] = useState("");

	//filtrar elementos según el término de búsqueda
	const elementosFiltrados = elementos.filter((elemento) =>
		elemento.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="p-4 justify-center items-center flex flex-col gap-4">
			<h2 className="text-xl mb-4">Búsqueda Dinámica</h2>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="Buscar elemento..."
				className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
			/>
			<ul className="list-disc list-inside text-center w-full max-w-md">
				{elementosFiltrados.map((elemento, index) => (
					<li key={index} className="text-lg text-violet-600">
						{elemento}
					</li>
				))}
			</ul>
			<Button label="Inicio" onClick={handleGoHome} />
		</div>
	);
}

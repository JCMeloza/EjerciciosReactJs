import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useState } from "react";
export default function DinamiList() {
	const navigate = useNavigate();
	const handleGoHome = () => {
		navigate("/");
	};

	//Estado para la lista y nuevos elementos
	const [list, setList] = useState([]);
	const [newItem, setNewItem] = useState("");

	//agregar nuevos elementos a la lista
	const handleAddItem = () => {
		if (newItem.trim() === "") return;
		setList([...list, newItem]);
		setNewItem("");
	};
	//eliminar elemento de la lista
	const handleRemoveItem = (indexToRemove) => {
		setList(list.filter((_, index) => index !== indexToRemove));
	};

	return (
		<div className="p-4 justify-center items-center flex flex-col gap-4">
			<h2 className="text-xl mb-4">Lista Dinámica</h2>
			<div className="flex gap-2">
				<input
					type="text"
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
					placeholder="Nuevo elemento.."
					className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
				/>
				<Button label="Agregar Elemento" onClick={handleAddItem} />
			</div>

			<ul className="list-disc list-inside text-center w-full max-w-md">
				{list.map((item, index) => (
					<li key={index} className="text-lg text-violet-600">
						{item}
						<button
							onClick={() => handleRemoveItem(index)}
							className="ml-4 text-red-500 hover:underline"
						>
							X
						</button>
					</li>
				))}
			</ul>
			<Button label="Inicio" onClick={handleGoHome} />
		</div>
	);
}

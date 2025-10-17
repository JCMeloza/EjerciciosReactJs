import ListaEjercicios from "./components/ListaEjercicios";
import { useEffect } from "react";
function App() {
	useEffect(() => {
		document.body.style.backgroundColor = "white";
	});
	return (
		<>
			<main className="min-h-screen bg-gray-100 p-4">
				<ListaEjercicios />
			</main>
		</>
	);
}

export default App;

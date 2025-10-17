import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
export default function ColorChanger() {
	const navigate = useNavigate();
	const cambiarColor = () => {
		document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	};

	const handleGoHome = () => {
		navigate("/");
	};

	return (
		<div className="p-4 justify-center items-center flex flex-col gap-4">
			<h2 className="text-xl mb-4">Cambiador de Color</h2>
			<Button label="Cambiar Color" onClick={cambiarColor} />
			<Button label="Inicio" onClick={handleGoHome} />
		</div>
	);
}

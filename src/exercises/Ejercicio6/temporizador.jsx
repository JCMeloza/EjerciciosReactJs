import Button from "../../components/button";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Temporizador() {
	const navigate = useNavigate();
	const handleGoHome = () => navigate("/");

	// único estado: segundos totales
	const [totalSeconds, setTotalSeconds] = useState(0);
	const [activo, setActivo] = useState(false);
	const intervalRef = useRef(null);

	// iniciar
	const manejarIniciar = () => {
		if (activo) return; // ya está funcionando
		setActivo(true);
		intervalRef.current = setInterval(() => {
			setTotalSeconds((s) => s + 1);
		}, 1000);
	};

	// pausar
	const manejarPausar = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
		setActivo(false);
	};

	// reiniciar
	const manejarReiniciar = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
		setActivo(false);
		setTotalSeconds(0);
	};

	// cleanup al desmontar
	useEffect(() => {
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, []);

	// derivar horas / minutos / segundos
	const horas = Math.floor(totalSeconds / 3600);
	const minutos = Math.floor((totalSeconds % 3600) / 60);
	const segundos = totalSeconds % 60;

	const formato = `${horas.toString().padStart(2, "0")}h:${minutos
		.toString()
		.padStart(2, "0")}m:${segundos.toString().padStart(2, "0")}s`;

	return (
		<div className="p-4 flex flex-col items-center gap-4">
			<h2 className="text-xl mb-4">⏱️ Temporizador</h2>

			<p className="text-3xl font-semibold text-violet-600">{formato}</p>

			<div className="flex gap-2">
				<Button label="Iniciar" onClick={manejarIniciar} />
				<Button label="Pausar" onClick={manejarPausar} />
				<Button label="Reiniciar" onClick={manejarReiniciar} />
			</div>

			<Button label="Inicio" onClick={handleGoHome} />
		</div>
	);
}

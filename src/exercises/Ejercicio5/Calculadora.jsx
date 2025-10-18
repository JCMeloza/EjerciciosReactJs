import Button from "../../components/button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Calculadora() {
	const navigate = useNavigate();
	const handleGoHome = () => {
		navigate("/");
	};
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [resultado, setResultado] = useState(null);

	//suma
	const manejarSuma = () => {
		const suma = parseFloat(input1) + parseFloat(input2);
		setResultado(suma);
	};
	//resta
	const manejarresta = () => {
		const resta = parseFloat(input1) - parseFloat(input2);
		setResultado(resta);
	};
    //multiplicacion
    const manejarmultiplicacion = () => {
        const multiplicacion = parseFloat(input1) * parseFloat(input2);
        setResultado(multiplicacion);
    };
    //division
    const manejardivision = () => {
        if (parseFloat(input2) === 0) {
            setResultado("Error: División por cero");
            return;
        }
        const division = parseFloat(input1) / parseFloat(input2);
        setResultado(division);
    };

    return(
        <div className="p-4 justify-center items-center flex flex-col gap-4">
            <h2 className="text-xl mb-4">Calculadora Simple</h2>
            <input
                type="number"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Número 1"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <input
                type="number"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="Número 2"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <div className="flex gap-2">
                <Button label="Sumar" onClick={manejarSuma} />
                <Button label="Restar" onClick={manejarresta} />
                <Button label="Multiplicar" onClick={manejarmultiplicacion} />
                <Button label="Dividir" onClick={manejardivision} />
            </div>
            {resultado !== null && (
                <p className="text-lg text-violet-600">Resultado: {resultado}</p>
            )}
            <Button label="Inicio" onClick={handleGoHome} />
        </div>
    )
}

import Button from "../../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CountWord() {
    const navigate = useNavigate();
    const handleGoHome = () => navigate("/");

    const [texto, setTexto] = useState("");
    const [palabras, setPalabras] = useState(0);
    const [caracteres, setCaracteres] = useState(0);

    const handleChange = (e) => {
        const text = e.target.value;
        setTexto(text);

        //contar caracteres
        let chart = text.replace(/\s/g, "").length;

        //contar palabras
        let words = text
            .trim()
            .split(/\s+/)
            .filter((word) => word.length > 0).length;

        setCaracteres(chart);
        setPalabras(words);
    };

    return (
        <div className="p-4 flex flex-col items-center gap-4">
            <h2 className="text-xl mb-4">
                📝 Contador de Palabras y Caracteres
            </h2>

            <textarea
                value={texto}
                onChange={handleChange}
                placeholder="Escribe tu texto aquí..."
                rows={6}
                className="border border-gray-300 rounded-lg p-3 w-80 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
            />

            <div className="flex gap-8 text-lg">
                <p>
                    <b>Palabras:</b> {palabras}
                </p>
                <p>
                    <b>Caracteres:</b> {caracteres}
                </p>
            </div>

            <Button label="Inicio" onClick={handleGoHome} />
        </div>
    );
}

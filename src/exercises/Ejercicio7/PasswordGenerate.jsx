import Button from "../../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordGenerate(){
    const navigate = useNavigate();
    const handleGoHome = ()=> navigate("/");

    const [lenght, setLenght] = useState("");
    const [password, setPassword] = useState("");
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const [error, setError]= useState("");

    //función para generar la contraseña
    const generarPassword = ()=>{
        const longitud = parseInt(lenght);

        if(isNaN(longitud) || longitud < 4){
            setError("Por favor ingrese un número válido mayor o igual a 4");
            setPassword("");
            return;
        }
        setError("");
        let resultado ="";

        for(let i=0; i<longitud; i++){
            const indice= Math.floor(Math.random() * caracteres.length);
            resultado += caracteres[indice];
        }
        setPassword(resultado);
    }
    	return (
		<div className="p-4 flex flex-col items-center gap-4">
			<h2 className="text-xl mb-4">🔐 Generador de Contraseña</h2>

			<div className="flex flex-col items-center gap-2">
				<label htmlFor="longitud" className="text-lg">
					Longitud de la contraseña:
				</label>
				<input
					id="longitud"
					type="number"
					value={lenght}
					onChange={(e) => setLenght(e.target.value)}
					placeholder="Ej: 10"
					className="border border-gray-300 rounded-lg p-2 w-40 text-center focus:outline-none focus:ring-2 focus:ring-violet-400"
				/>
				<Button label="Generar contraseña" onClick={generarPassword} />
			</div>

			{error && <p className="text-red-500 font-medium">{error}</p>}

			{password && (
				<div className="bg-gray-100 border border-gray-300 rounded-lg p-3 mt-2">
					<p className="font-mono text-violet-700 break-all">{password}</p>
				</div>
			)}

			<Button label="Inicio" onClick={handleGoHome} />
		</div>
	);

}
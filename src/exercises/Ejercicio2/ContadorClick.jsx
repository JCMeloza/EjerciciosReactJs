import Button from "../../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContadorClick(){
    const navigate = useNavigate();
    const handleGoHome = () => {
		navigate("/");
	};
    const [contador, setContador] = useState(0);
    
    const manejarClick = () => {
        setContador(contador + 1);
    };

    return(
        < div className="p-4 justify-center items-center flex flex-col gap-4">
            <h2 className="text-xl mb-4">Contador de Clics</h2>
            <p className="text-lg text-violet-600">Clics: {contador}</p>
            <Button label="Clic" onClick={manejarClick} />
            <Button label="Inicio" onClick={handleGoHome} />
        </div>
    );



};

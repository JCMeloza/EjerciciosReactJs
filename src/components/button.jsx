import React from "react";

const Button = ({ label, onClick }) => {
	return (
		<button
			className="bg-blue-600 hover:bg-amber-800 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;

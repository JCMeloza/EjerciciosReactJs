import { useEffect, useState } from "react";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

export function ListTasks() {
    const navigate = useNavigate();
    const handleGoHome = () => navigate("/");

    // Estado inicial del LocalStorage
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [newTask, setNewTask] = useState("");

    //guardamos en localstorage cada vez que cambien las tareas
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // añadir tareas
    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    };

    //alterar entre completadas  y no completadas

    const toggleTask = (index) => {
        const updated = [...tasks];
        updated[index].completed = !updated[index].completed;
        setTasks(updated);
    };

    // Eliminar tareas completadas
    const clearCompleted = () => {
        setTasks(tasks.filter((t) => !t.completed));
    };

    // Enter = añadir tarea
    const handleKeyPress = (e) => {
        if (e.key === "Enter") addTask();
    };

    return (
        <div className="p-4 flex flex-col items-center gap-4">
            <h2 className="text-xl mb-4">📝 Lista de Tareas</h2>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Nueva tarea..."
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
                <Button label="Agregar" onClick={addTask} />
            </div>

            <ul className="w-full max-w-md text-left mt-4">
                {tasks.length === 0 && (
                    <p className="text-gray-500 italic text-center">
                        No hay tareas aún
                    </p>
                )}
                {tasks.map((task, i) => (
                    <li
                        key={i}
                        className="flex items-center gap-2 p-1 border-b border-gray-200"
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(i)}
                        />
                        <span
                            className={`flex-1 ${
                                task.completed
                                    ? "line-through text-gray-400"
                                    : ""
                            }`}
                        >
                            {task.text}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="flex gap-2 mt-4">
                <Button label="Eliminar Completadas" onClick={clearCompleted} />
                <Button label="Inicio" onClick={handleGoHome} />
            </div>
        </div>
    );
}

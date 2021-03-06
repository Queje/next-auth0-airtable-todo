import { useState, useContext } from "react"
import { ToDosContext } from "../contexts/ToDosContext";

export default function ToDoForm() {
    const [todo, setTodo] = useState("");
    const { addTodos } = useContext(ToDosContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodos(todo);
        setTodo('');
    }

    return(
        <form className="form my-6" onSubmit={handleSubmit}>
            <div className="flex flex-col text-sm mb-2">
                <label htmlFor="todo" className="font-bold mb-2 text-gray-800">To Do</label>
                <input 
                    type="text" 
                    name="todo" 
                    id="todo" 
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Tell me what to do!"
                    className="border border-gray-200 p-2 mb-2 rounded-lg appearance-none focus:outline-none focus:border-gray-500"
                />
                <button type="submit" className="w-full rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-6">Submit</button>
            </div>
        </form>
    )
}
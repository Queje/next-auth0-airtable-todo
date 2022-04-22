import { ToDosContext } from "../contexts/ToDosContext"
import { useContext } from "react"

export default function ToDo({todo}) {
    const {updateTodos, deleteTodos } = useContext(ToDosContext);

    const handleToggle = async() => {
        const updatedFields = {...todo.fields, completed: !todo.fields.completed}
        const updatedToDo = {id:todo.id, fields: updatedFields}
        updateTodos(updatedToDo)
    }

    return(
        <li className="bg-white rounded-lg flex items-center shadow-lg my-4 py-2 px-4">
            <input 
                type="checkbox" 
                name="completed" 
                checked={todo.fields.completed} 
                className="mr-2 form-checkbox h-5 w-5"
                onChange={handleToggle}
            />
            <p className={
                `flex-1 text-gray-800 ${todo.fields.completed ? 'line-through' : ''}`
                }
            >
                {todo.fields.description}
            </p>
            <button
                type="button"
                className="text-sm text-white bg-red-500 hover:bg-red-600 py-1 px-2 rounded"
                onClick={() => deleteTodos(todo.id)}
            >
                deleted
            </button>
        </li>
    )
}
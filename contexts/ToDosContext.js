import react from "react";
import { createContext, useState } from "react";

const ToDosContext = createContext();

const ToDosProvider = ({children}) => {
    const [ todos, setTodos ] = useState();

    const refreshTodos = async () =>{
        try{
            const res = await fetch('/api/getToDos');
            const latestToDos = await res.json();
            setTodos(latestToDos)
        }catch(err){
            console.error(err)
        }
    };

    const addTodos = async (description) => {
        try{
            const res = await fetch('/api/createToDos',{
                method: 'POST',
                body: JSON.stringify({description}),
                headers: {'Content-Type': 'application/json'}
            });
            const newToDos = await res.json();
            setTodos((prevToDos)=>{
                return[newToDos, ...prevToDos]
            })
        }catch(err){
            console.error(err)
        }
    };

    const updateTodos = async (updatedTodo) => {
        try{
            const res = await fetch('/api/updateToDos',{
                method: 'PUT',
                body: JSON.stringify(updatedTodo),
                headers: {'Content-Type': 'application/json'}
            });
            await res.json();
            setTodos((prevTodos)=>{
                const existingTodos = [...prevTodos];
                const existingTodo = existingTodos.find(
                    (todo) => todo.id === updatedTodo.id
                );
                existingTodo.fields = updatedTodo.fields;
                return existingTodos;
            })
        }catch(err){
            console.error(err)
        }
    };

    const deleteTodos = async (id) => {
        try{
            await fetch('/api/deletedToDos',{
                method: 'Delete',
                body: JSON.stringify({ id }),
                headers: {'Content-Type': 'application/json'}
            });
            setTodos((prevToDos)=>{
                return(prevToDos.filter((todo) => todo.id !== id))
            });
        }catch(err){
            console.error(err)
        };
    };

    return (
        <ToDosContext.Provider
            value={{
                todos,
                setTodos,
                refreshTodos,
                updateTodos,
                deleteTodos,
                addTodos,
            }}
        >
            {children}
        </ToDosContext.Provider>
    )
}

export { ToDosContext, ToDosProvider };
import ToDoForm from '../components/ToDoForm';
import ToDo from '../components/ToDo';

export default function UserContent({todos}) {

    return(
        <>
            <h1 className='text-2xl text-center mb-4'>List of the things to do</h1>
            <ToDoForm />
            <ul>
            { todos && 
                todos.map(todo => 
                <ToDo key={todo.id} todo={todo}/>
                )}
            </ul>
        </>
    )
}
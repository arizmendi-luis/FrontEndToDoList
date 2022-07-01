import React, { Fragment, useEffect, useState } from 'react'; 
import EditTodo from "./EditTodo";

const ListTodos = () => {  
    const [todos, setTodos] = useState([]); 

    //delete function 

    const deleteTodo = async (id) => {  
        const port = process.env.PORT || 5000; 
        try {
            const deleteTodo = await fetch(`http://localhost:` + port + `/todos/${id}`, { //5000 (3)
                method: "DELETE"
            });  
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async() => {  
        const port = process.env.PORT || 5000; 
    try { 
        const response = await fetch("http://localhost:" + port + "/todos");  // 5000 (4)
        const jsonData = await response.json(); 
        setTodos(jsonData);  
    } catch (err) { 
        console.error(err.message);
    }
};

useEffect(() => { 
    getTodos(); 
    }, []); 

    console.log(todos);

    return ( 
    <Fragment> 
        {" "}  
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead> 
            <tbody> 
                {todos.map(todo => ( 
                    <tr key={todo.todo_id}> 
                        <td>{todo.description} </td> 
                        <td><EditTodo todo={todo}/></td> 
                        <td>
                            <button 
                                className='btn btn-danger' 
                                onClick={() => deleteTodo(todo.todo_id)}
                                >Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment> 
  ); 
};

export default ListTodos

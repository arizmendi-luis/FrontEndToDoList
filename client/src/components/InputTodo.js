import React, { Fragment, useState } from "react"; 

const InputTodo = () => {  
    const [description, setDescription] = useState("");   

    const onSubmitForm = async e => {  
        e.preventDefault();  
        const port = process.env.PORT || 5000; 
        try {
           const body = { description }; 
           const response = await fetch("http://localhost:" + port + "/todos", { // 5000 (2)
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body) 
           });  

           window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
     };

    return (
        <Fragment>
            <h1 className="text-center m"> PERN List</h1> 
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>  
                <input 
                    type = "text" 
                    className="form-control" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                /> 
                <button className="btn btn-success">Add</button>
            </form> 
        </Fragment> 
    );
}; 

export default InputTodo; 
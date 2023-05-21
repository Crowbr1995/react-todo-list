import React, {useState} from "react";

export const AddTodo = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        
        addTodo(value);

        setValue("");
    }

    return (
            <form className="AddTodo" onSubmit={handleSubmit}>
                <input type="text" placeholder="Task name" className="task-input" maxlength="30
                " value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button type="submit" className="form-btn">Add</button>
            </form>
    ) 
}
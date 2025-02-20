import React, { useState } from 'react';
import axios from 'axios';

function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/tasks', { title, description, completed: false })
            .then(() => { setTitle(''); setDescription(''); })
            .catch(error => console.error(error));
    };

    return (
        <div className="container mt-4">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Title"
                    value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" className="form-control mt-2" placeholder="Description"
                    value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit" className="btn btn-primary mt-2">Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;

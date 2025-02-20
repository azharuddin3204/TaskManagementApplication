import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Task List</h2>
            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item">
                        {task.title} - {task.description} [{task.completed ? "Completed" : "Pending"}]
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    return (
        <div>
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;

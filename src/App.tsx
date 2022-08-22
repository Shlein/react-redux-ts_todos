import React, { useEffect } from 'react';
import './App.css';
import { AddTodoForm } from "./Components/AddTodoForm/AddTodoForm";
import { TodoList } from "./Components/TodoList/TodoList";

function App() {

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    const inputRef = React.createRef<HTMLInputElement>()

    return (
        <div className="App">
            <h1>React Redux TypeScript Todo list</h1>
            <AddTodoForm
                placeholder="What needs to be done?"
                ref={inputRef}
            />
            <TodoList/>
        </div>
    );
}

export default App

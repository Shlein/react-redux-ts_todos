import React, {useEffect, useState} from 'react';
import './App.css';
import {AddTodoForm} from "./Components/AddTodoForm/AddTodoForm";
import {ITodo} from "./types/types";
import {TodoList} from "./Components/TodoList/TodoList";
import {FilterButton} from "./Components/FilterButton/FilterButton";

function App() {

    const [todos, setTodos] = useState<ITodo[]>([
        {id: '01', text: 'uborka', isCompleted: false},
        {id: '02', text: 'son', isCompleted: false},
        {id: '03', text: 'trenya', isCompleted: false},
    ]);
    const [todoText, setTodoText] = useState("");
    const [filterBy, setFilterBy] = useState("All");
    const [filteredTodos, setFilteredTodos] = useState(todos)

    useEffect(() => {
        filterTodos(filterBy)
    }, [filterBy])

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    const inputRef = React.createRef<HTMLInputElement>()

    const filterTodos = (filterBy: string): void => {
        switch (filterBy) {
            case "All":
                setFilteredTodos([...todos])
                break;
            case "Active":
                setFilteredTodos([...todos.filter((todo) => {
                    if (!todo.isCompleted) {
                        return todo
                    }
                })]);
                break;
            case "Completed":
                setFilteredTodos([...todos.filter((todo) => {
                    if (todo.isCompleted) {
                        return todo
                    }
                })]);
                break;
            default:
                return;
        }
    }

    const addTodo: React.FormEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (todoText && todoText.trim()) {
            const todo: ITodo = {
                id: Date.now().toString(),
                text: todoText,
                isCompleted: false,
            }
            setFilteredTodos([...filteredTodos, todo]);
            setTodos([...todos, todo]);
            setTodoText("");
        } else {
            setTodoText("")
        }
    }

    const handleCompleteButton = (todoId: string): void => {
        setTodos([...todos.map(
        (todo): ITodo => {
            if (todo.id === todoId) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })])}

    const handleTodoInput: React.ChangeEventHandler<HTMLInputElement> =
        (e) => {
            setTodoText(e.target.value);
    }

    return (
        <div className="App">
            <h1>React Redux TypeScript Todo list</h1>
            <AddTodoForm
                handleTodoInput={handleTodoInput}
                todoInputText={todoText}
                addTodo={addTodo}
                placeholder="What needs to be done?"
                ref={inputRef}
            />
            <TodoList
                todos={filteredTodos}
                handleCompleteButton={handleCompleteButton}
            />
            <div>
                <div>
                    <FilterButton handleClick={setFilterBy}>
                        All
                    </FilterButton>

                    <FilterButton handleClick={setFilterBy}>
                        Active
                    </FilterButton>

                    <FilterButton handleClick={setFilterBy}>
                        Completed
                    </FilterButton>
                </div>
            </div>
        </div>
    );
}

export default App

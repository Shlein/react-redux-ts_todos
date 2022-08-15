import React from 'react';
import {ITodo} from "../../types/types";
import {TodoItem} from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'

interface ITodoListProps {
    todos: ITodo[],
    handleCompleteButton: (id: string) => void,
}

const TodoList: React.FC<ITodoListProps> = (props) => {

    function todosLeft() {
        return props.todos.reduce((prev: number, value: ITodo): number => {
            if (!value.isCompleted) {
                prev += 1
            }
            return prev
        }, 0)
    }

    return (
        <div className={styles.container}>
            {
                props.todos.map((todo: ITodo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                        handleCompleteButton={props.handleCompleteButton}
                    />
                ))
            }
            <span
                className={styles.todoLeft}
            >
                {todosLeft()} todos left
            </span>
        </div>
    )
}

export {
    TodoList
}

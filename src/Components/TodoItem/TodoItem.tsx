import React from 'react';
import { ITodo } from "../../types/types";
import styles from './TodoItem.module.css'
import { useAppDispatch } from "../../hooks";
import { removeTodo, toggleTodo } from "../../store/slices/todoSlice";

interface ITodoItemProps extends ITodo {

}

const TodoItem: React.FC<ITodoItemProps> = (props) => {

    const dispatch = useAppDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.text}>{props.text}</div>
            {
                props.isCompleted
                    ? <button onClick={() => dispatch(toggleTodo({id: props.id}))}>Revert</button>
                    : <button onClick={() => dispatch(toggleTodo({id: props.id}))}>Complete</button>
            }
            <button
                className={styles.removeBtn}
                onClick={() => dispatch(removeTodo({id: props.id}))}
            >
                Remove
            </button>
        </div>
    )
}

export {
    TodoItem
}

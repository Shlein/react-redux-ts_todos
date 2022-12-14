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
            <div className={styles.rightFeatures}>
                {
                    props.isCompleted
                        ? <button onClick={() => dispatch(toggleTodo({id: props.id}))}>Revert</button>
                        : <button onClick={() => dispatch(toggleTodo({id: props.id}))}>Complete</button>
                }
                <span className={`material-icons ${styles.removeIcon}`}
                      onClick={() => dispatch(removeTodo({id: props.id}))}
                >
                    close
                </span>
            </div>
        </div>
    )
}

export {
    TodoItem
}

import React from 'react';
import {ITodo} from "../../types/types";
import styles from './TodoItem.module.css'

interface ITodoItemProps extends ITodo {
    handleCompleteButton: (id: string) => void,
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.text}>{props.text}</div>
            {
                props.isCompleted
                    ? <button onClick={() => props.handleCompleteButton(props.id)}>Revert</button>
                    : <button onClick={() => props.handleCompleteButton(props.id)}>Complete</button>
            }
        </div>
    )
}

export {
    TodoItem
}

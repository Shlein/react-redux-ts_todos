import React, {useState} from 'react';
import styles from './AddTodoForm.module.css'
import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../store/slices/todoSlice";

export type ITodoFormProps = {
    placeholder?: string,
}

const AddTodoForm = React.forwardRef<HTMLInputElement, ITodoFormProps>((props, ref) => {

    const [todoText, setTodoText] = useState("");

    const appDispatch = useAppDispatch();

    const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTodoText(e.target.value)
    }

    const addTodoFunction: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (todoText.trim()) {
            appDispatch(addTodo({
                id: String(Date.now()),
                text: todoText,
                isCompleted: false,
            }));
        }
        setTodoText('');
    }

    return (
            <form onSubmit={(e) => addTodoFunction(e)}>
                <input
                    className={styles.input}
                    value={todoText}
                    placeholder={props.placeholder}
                    onChange={(e) => inputHandler(e)}
                    ref={ref}
                />
                <button
                    type='submit'
                >Добавить Todo</button>
            </form>
        )
})

export {
    AddTodoForm
}

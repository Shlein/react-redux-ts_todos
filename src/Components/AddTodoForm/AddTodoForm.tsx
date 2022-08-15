import React from 'react';
import styles from './AddTodoForm.module.css'

export type ITodoFormProps = {
    handleTodoInput: any, // разобраться с типами
    addTodo: any, // разобраться с типами
    placeholder?: string,
    todoInputText: string,
}

const AddTodoForm = React.forwardRef<HTMLInputElement, ITodoFormProps>((props, ref) => {
        return (
            <form onSubmit={props.addTodo}>
                <input
                    className={styles.input}
                    value={props.todoInputText}
                    placeholder={props.placeholder}
                    onChange={(e) => props.handleTodoInput(e)}
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

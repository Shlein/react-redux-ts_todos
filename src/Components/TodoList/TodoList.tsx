import React from 'react';
import { ITodo } from "../../types/types";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {FilterButton} from "../FilterButton/FilterButton";
import {showActiveTodos, showAllTodos, showCompletedTodos} from "../../store/slices/todoSlice";

interface ITodoListProps {
}

const TodoList: React.FC<ITodoListProps> = (props) => {

    const {
        todos,
        completedTodos,
        activeTodos,
        showCompleted,
        showActive,
    } = useAppSelector(state => state.todos);

    let todosToRender: ITodo[];

    const dispatch = useAppDispatch();

    function activeTodosAmount() {
        return todos.reduce((prev: number, value: ITodo): number => {
            if (!value.isCompleted) {
                prev += 1
            }
            return prev
        }, 0)
    }

    if (showActive) {
        todosToRender = activeTodos
    } else if (showCompleted) {
        todosToRender = completedTodos
    } else {
        todosToRender = todos
    }

    return (
        <div className={styles.container}>
            {
                todosToRender.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                    />
                ))
            }

            <span
                className={styles.activeTodosAmount}
            >
                {activeTodosAmount()} todos left
            </span>

            <div>
                <div>
                    <FilterButton handleClick={() => dispatch(showAllTodos())}>
                        All
                    </FilterButton >

                    <FilterButton handleClick={() => dispatch(showActiveTodos())}>
                        Active
                    </FilterButton>

                    <FilterButton handleClick={() => dispatch(showCompletedTodos())}>
                        Completed
                    </FilterButton>
                </div>
            </div>
        </div>
    )
}

export {
    TodoList
}

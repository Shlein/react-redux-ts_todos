import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types";

type TodoState = {
	todos: ITodo[],
	activeTodos: ITodo[],
	completedTodos: ITodo[],
	filterValue: string,
	showAll: boolean,
	showActive: boolean,
	showCompleted: boolean,
}

const initialState: TodoState = {
	todos: [
		{id: '01', text: 'uborka', isCompleted: false},
		{id: '02', text: 'son', isCompleted: false},
		{id: '03', text: 'trenya', isCompleted: false},
	],
	completedTodos: [],
	activeTodos: [],
	filterValue: 'all',
	showAll: true,
	showActive: false,
	showCompleted: false,
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.push(action.payload);
		},
		removeTodo: (state, action: PayloadAction<{id: string}>) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
			state.completedTodos = state.todos.filter(todo => todo.isCompleted);
			state.activeTodos = state.todos.filter(todo => !todo.isCompleted)
		},
		toggleTodo: (state, action: PayloadAction<{id: string}>) => {
			state.todos.forEach(todo => {
				if (todo.id === action.payload.id) {
					todo.isCompleted = !todo.isCompleted;
				}
			})
			state.completedTodos.forEach(todo => {
				if (todo.id === action.payload.id) {
					todo.isCompleted = !todo.isCompleted;
					state.completedTodos = state.todos.filter(todo => todo.isCompleted)
				}
			})
			state.activeTodos.forEach(todo => {
				if (todo.id === action.payload.id) {
					todo.isCompleted = !todo.isCompleted;
					state.activeTodos = state.todos.filter(todo => !todo.isCompleted)
				}
			})
		},
		showAllTodos: (state) => {
			state.filterValue = 'all';
			state.showAll = true;
			state.showActive = false;
			state.showCompleted = false;
		},
		showCompletedTodos: (state) => {
			state.completedTodos = state.todos.filter(todo => todo.isCompleted);
			state.filterValue = 'completed';
			state.showAll = false;
			state.showActive = false;
			state.showCompleted = true;
		},
		showActiveTodos: (state) => {
			state.activeTodos = state.todos.filter(todo => !todo.isCompleted);
			state.filterValue = 'active';
			state.showAll = false;
			state.showActive = true;
			state.showCompleted = false;
		}
	}
})

export const {
	addTodo,
	removeTodo,
	toggleTodo,
	showAllTodos,
	showActiveTodos,
	showCompletedTodos
} = todoSlice.actions

// export const selectFilterValue = state => state.filterValue;
// export const selectAllTodos = state => state.todos;
// export const selectCompletedTodos = state => state.completedTodos;
// export const selectActiveTodos = state => state.activeTodos;

export default todoSlice.reducer
import { useReducer, useEffect } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = []

const todoInit = () => {
    return JSON.parse(localStorage.getItem('todos')) || initialState
}

export const useTodo = () => {

    const [todos, todosDispatch] = useReducer(todoReducer, initialState, todoInit);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (newTodo) => {
        todosDispatch({
            type: '[TODO] Add',
            payload: newTodo
        })
    }

    const handleDeleteTodo = (todoId) => {
        todosDispatch({
            type: '[TODO] Delete',
            payload: todoId
        })
    }

    const handleToggleTodo = (todoId) => {
        todosDispatch({
            type: '[TODO] Toggle',
            payload: todoId
        })
    }


    return {
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}

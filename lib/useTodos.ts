import { useCallback, useReducer } from 'react'

type ActionType =
  | { type: 'ADD'; text: string }
  | { type: 'REMOVE'; id: number }
  | { type: 'UPDATE'; text: string; id: number }

interface Todo {
  id: number
  done: boolean
  text: string
}

export function useTodos(initialTodos: Todo[]): {
  todos: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: number) => void
  updateTodo: (id: number, text: string) => void
} {
  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case 'ADD':
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
            done: false,
          },
        ]
      case 'REMOVE':
        return state.filter(({ id }) => id !== action.id)
      case 'UPDATE':
        const updatedState = [...state]
        updatedState.map((todo) => {
          if (todo.id === action.id) {
            todo.text = action.text
          }
        })
        state = updatedState
        return state
      default:
        throw new Error()
    }
  }, initialTodos)

  const addTodo = useCallback((text: string) => {
    dispatch({
      type: 'ADD',
      text,
    })
  }, [])

  const removeTodo = useCallback((id: number) => {
    dispatch({
      type: 'REMOVE',
      id,
    })
  }, [])

  const updateTodo = useCallback((id: number, text: string) => {
    dispatch({
      type: 'UPDATE',
      id,
      text,
    })
  }, [])

  return { todos, addTodo, removeTodo, updateTodo }
}

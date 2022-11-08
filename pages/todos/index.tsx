import styles from '../../styles/Home.module.css'
import { useCallback, useReducer, useRef } from 'react'
import Button from '../../components/Button'

interface Todo {
  id: number
  done: boolean
  text: string
}

type ActionType = { type: 'ADD'; text: string } | { type: 'REMOVE'; id: number }

export default function Todos() {
  const newTodoRef = useRef<HTMLInputElement>(null)

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: 'ADD',
        text: newTodoRef.current.value,
      })
      newTodoRef.current.value = ''
    }
  }, [])

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
      default:
        throw new Error()
    }
  }, [])

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <Button
            onClick={() =>
              dispatch({
                type: 'REMOVE',
                id: todo.id,
              })
            }
          >
            Remove
          </Button>
        </div>
      ))}
      <input type="text" placeholder="add todo" ref={newTodoRef} />
      <Button title="Add todo" onClick={onAddTodo}></Button>
    </div>
  )
}

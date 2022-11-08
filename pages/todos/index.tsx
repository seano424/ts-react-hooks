import styles from '../../styles/Home.module.css'
import { useCallback, useRef } from 'react'
import { useTodos } from '../../lib/useTodos'
import Button from '../../components/Button'

export default function Todos() {
  const newTodoRef = useRef<HTMLInputElement>(null)
  const { todos, addTodo, removeTodo } = useTodos([
    {
      done: false,
      id: 0,
      text: 'whoa',
    },
  ])

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value)
      newTodoRef.current.value = ''
    }
  }, [])

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <Button onClick={() => removeTodo(todo.id)}>Remove</Button>
        </div>
      ))}
      <input type="text" placeholder="add todo" ref={newTodoRef} />
      <Button title="Add todo" onClick={onAddTodo}></Button>
    </div>
  )
}

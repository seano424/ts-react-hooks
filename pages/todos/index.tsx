import styles from '../../styles/Home.module.css'
import { useCallback, useRef } from 'react'
import { useTodos } from '../../lib/useTodos'
import Todo from '../../components/Todo'
import Button from '../../components/Button'

export default function Todos() {
  const newTodoRef = useRef<HTMLInputElement>(null)
  const { todos, addTodo, removeTodo, updateTodo } = useTodos([
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
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      ))}
      <input type="text" placeholder="add todo" ref={newTodoRef} />
      <Button title="Add todo" onClick={onAddTodo}></Button>
    </div>
  )
}

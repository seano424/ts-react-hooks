import React, { useCallback, useState, useRef } from 'react'
import Button from './Button'

interface TodoProps {
  todo: {
    id: number
    done: boolean
    text: string
  }
  removeTodo: (id: number) => void
  updateTodo: (id: number, text: string) => void
}

const Todo = ({ todo, removeTodo, updateTodo }: TodoProps) => {
  const [toUpdate, setToUpdate] = useState<boolean>(false)
  const [value, setValue] = useState<string>(todo.text)
  const todoRef = useRef<HTMLInputElement>(null)

  const handleToUpdate = () => {
    setToUpdate(true)
  }

  const handleUpdate = () => {
    if (todoRef.current) {
      updateTodo(todo.id, todoRef.current.value)
      setToUpdate(false)
      todoRef.current.value = ''
    }
  }

  return (
    <div>
      {toUpdate ? (
        <>
          <input
            type="text"
            value={value}
            ref={todoRef}
            onChange={(evt) => setValue(evt.target.value)}
          />
          <Button onClick={handleUpdate}>Update</Button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <Button onClick={handleToUpdate}>Update</Button>
        </>
      )}

      <Button onClick={() => removeTodo(todo.id)}>Remove</Button>
    </div>
  )
}

export default Todo

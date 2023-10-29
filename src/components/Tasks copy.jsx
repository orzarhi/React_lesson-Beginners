import React, { useState } from 'react'
import { Check, Pencil, Trash2 } from 'lucide-react'
import './Tasks.css'
import { Link } from 'react-router-dom'

export const Tasks = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [todoIndex, setTodoIndex] = useState(-1)

    const handleAddTodo = () => {
        if (!todo) return

        if (todoIndex > -1) {
            todos.find((_, index) => {
                if (index === todoIndex) {
                    todos[index] = todo
                }
            })
            setTodoIndex(-1)
            setTodo('')

        }
        else {
            setTodos([...todos, todo])
            setTodo('')
        }
    }

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const handleUpdateTodo = (index) => {
        setTodo(todos[index])
        setTodoIndex(index)

    }

    return (
        <>
            <div className='task-wrapper'>
                <div>
                    <input
                        onChange={({ target }) => setTodo(target.value)}
                        value={todo}
                        className='task-input'
                        placeholder='Add a new task...'
                    />
                    <Check
                        onClick={handleAddTodo}
                        className='check-icon'
                        style={{ cursor: todo ? 'pointer' : 'not-allowed' }}
                    />
                </div>
            </div>
            <div className='todo-wrapper'>
                {todos?.map((todo, index) => (
                    <div className='todo-item'>
                        <Link to={`/${index}`} className='todo-link'>
                            <span
                                key={index}
                            >
                                {index + 1}. {todo}
                            </span>
                        </Link>
                        <div >
                            <Trash2
                                className='trash-icon'
                                onClick={() => handleDeleteTodo(index)}
                            />
                            <Pencil
                                className='pencil-icon'
                                onClick={() => handleUpdateTodo(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

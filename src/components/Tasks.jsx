import React, { useState } from 'react'
import { Check } from 'lucide-react'
import './Tasks.css'

export const Tasks = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])

    const handleAddTodo = () => {
        if (!todo) return
        setTodos([...todos, todo])
        setTodo('')
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
                    <span
                        key={index}
                        className='todo-item'
                    >
                        {index + 1}. {todo}
                    </span>
                ))}
            </div>
        </>
    )
}

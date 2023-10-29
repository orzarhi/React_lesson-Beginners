import React, { useEffect, useState } from 'react'
import { Check, Pencil, Trash2 } from 'lucide-react'
import './Tasks.css'
import { Link } from 'react-router-dom'

export const Tasks = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [todoIndex, setTodoIndex] = useState(-1)

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
            setTodos(todos)
        }
    }, [todo])




    const handleAddTodo = () => {
        if (!todo) return

        if (todoIndex > -1) {
            const updatedTodo = [...todos];
            updatedTodo[todoIndex] = todo;
            setTodos(updatedTodo);
            localStorage.setItem('todos', JSON.stringify(updatedTodo));
            setTodoIndex(-1);
        } else {
            const newTodo = [...todos, todo];
            setTodos(newTodo);
            localStorage.setItem('todos', JSON.stringify(newTodo));
        }

        setTodo('');
    }

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))

    }

    const handleUpdateTodo = (index) => {
        setTodo(todos[index])
        setTodoIndex(index)
    };

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
                    <div className='todo-item' key={index}>
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

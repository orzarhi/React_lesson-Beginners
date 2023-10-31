import React, { useEffect, useState } from 'react'
import { Check, Loader2, Pencil, Trash2 } from 'lucide-react'
import './Tasks.css'
import { Link } from 'react-router-dom'
import { reject, wait } from '../lib/utils'
import { success, error, info } from '../lib/notification'

export const Tasks = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [todoIndex, setTodoIndex] = useState(-1)
    const [onClickCheck, setOnClickCheck] = useState(false)

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
            setTodos(todos)
        }
    }, [todo])


    const handleAddTodo = async () => {

        if (!todo) return info('Please enter a task')
        try {
            setOnClickCheck(true)
            await wait(1000);
            // await reject(1000)

            if (todoIndex > -1) {
                const updatedTodo = [...todos];
                updatedTodo[todoIndex] = todo;
                setTodos(updatedTodo);
                localStorage.setItem('todos', JSON.stringify(updatedTodo));
                setTodoIndex(-1);
                success('Task updated successfully')
            } else {
                const newTodo = [...todos, todo];
                setTodos(newTodo);
                localStorage.setItem('todos', JSON.stringify(newTodo));
                success('Task added successfully')
            }

            setTodo('');
        } catch (err) {
            error('Something went wrong')
        } finally {
            setOnClickCheck(false)
        }

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
            <div className='container'>
                <div style={{ display: 'flex', marginLeft: '1.5rem' }}>
                    <input
                        onChange={({ target }) => setTodo(target.value)}
                        value={todo}
                        className='task-input'
                        disabled={onClickCheck}
                        placeholder='Add a new task...'
                    />
                    {!onClickCheck ?
                        <Check
                            onClick={handleAddTodo}
                            className='icon'
                            style={{ cursor: todo ? 'pointer' : 'not-allowed' }}
                        /> :
                        <Loader2 className='icon loading' />
                    }
                </div>
            </div>
            <div className='todo-wrapper'>
                {todos?.map((todo, index) => (
                    <div className='todo-item' key={index}>
                        <Link to={`/${index}`} className='todo-link'>
                            <span style={{ opacity: todoIndex === index ? 0.5 : 1 }}>{index + 1}. {todo}</span>
                        </Link>
                        <div>
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
                <div className='todo-item'>
                    {(todoIndex === -1 && onClickCheck) && <span style={{ opacity: 0.5 }}>{todos.length + 1}. {todo}</span>}
                </div>
            </div >
        </>
    )
}

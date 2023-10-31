import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Todo.css'

export const Todo = () => {
    const { todoId } = useParams();
    const [todo, setTodo] = useState('');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            const selectedTodo = storedTodos[todoId];
            if (selectedTodo) {
                setTodo(selectedTodo);
            }
        }
    }, [todoId]);

    return (
        <div className='container'>
            <h3 className='todo-title'>{todo}</h3>
        </div>
    )
}

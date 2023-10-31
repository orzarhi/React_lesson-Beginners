import { CornerUpLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Todo.css';

export const Todo = () => {
    const { todoId } = useParams();
    const navigate = useNavigate()
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
            <CornerUpLeft
                className='back-icon'
                onClick={() => navigate(-1)}
            />
        </div>
    )
}

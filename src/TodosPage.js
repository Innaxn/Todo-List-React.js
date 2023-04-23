import React, { useContext, useEffect } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';
import { GlobalState } from './GlobalStateContextHooks'
import Container from '@mui/material/Container';

const ToDosPage = () => {

    const handleAddItem = (title) => {
        const newTodoItems = [...todoItems, { id: todoItems.length + 1, title, done: false }];

        GlobalState.set({
            todoItems: newTodoItems,
        })

    };

    const handleDelete = (taskId) => {
        const newTodoItems = todoItems.filter((item) => item.id !== taskId);
        GlobalState.set({
            todoItems: newTodoItems,
        })
    };

    const handleUpdate = (taskId, newTitle, IsCompleted) => {
        const updatedItems = todoItems.map(item => {
            if (item.id === taskId) {
                return { ...item, title: newTitle, done: IsCompleted };
            }
            return item;
        });
        GlobalState.set({
            todoItems: updatedItems,
        })
    };

    const { count, todoItems } = useContext(GlobalState)

    useEffect(() => {
        console.log(todoItems);
    }, [todoItems]);

    return (
        <Container sx={{ padding: 5 }} maxWidth="lg">
            <AddTask onAddItem={handleAddItem} />
            <TodoList todoItems={todoItems} onDelete={handleDelete} onUpdate={handleUpdate} />
        </Container>
    );
}

export default ToDosPage;
import React from "react";
import Task from "./Task";
import { Grid, Typography } from '@mui/material';
import List from '@mui/material/List';

function TodoList({ todoItems, onDelete, onUpdate }) {
  return (
    <Grid container sx={{ border: '1px solid #ccc', borderRadius: 8, padding: 2 }}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Todo List
        </Typography>
        <List  >
          {todoItems.map((todoItem) => (
            <Task key={todoItem.id} task={todoItem} onDelete={onDelete} onUpdate={onUpdate} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default TodoList;
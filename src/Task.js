import React, { useState } from "react";
import DeleteTask from "./DeleteTask";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

function Task({ task, onDelete, onUpdate }) {
  const [isCompleted, setIsCompleted] = useState(task.done);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleCheck = () => {
    setIsCompleted(!isCompleted);
    onUpdate(task.id, task.title, !isCompleted);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTitle(task.title);
  };

  const handleUpdate = () => {
    onUpdate(task.id, newTitle, isCompleted);
    setIsEditing(false);
  };

  const textStyles = isCompleted ? { textDecoration: "line-through" } : {};

  if (isEditing) {
    return (
      <ListItem>
        <Input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Button onClick={handleUpdate}>Update</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </ListItem>
    );
  } else {
    return (
      <ListItem sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Checkbox checked={isCompleted} onChange={handleCheck} />
          <ListItemText style={textStyles}>{task.title}</ListItemText>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleEdit}>Edit</Button>
          <DeleteTask onClick={handleDelete} />
        </Box>
      </ListItem>
    );
  }
}

export default Task;
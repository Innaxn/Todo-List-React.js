import React from "react";
import Button from '@mui/material/Button';

function DeleteTask(props) {
  const handleDelete = () => {
    props.onClick();
  };

  return (
    <Button onClick={handleDelete}>Delete</Button>
  );
}

export default DeleteTask;
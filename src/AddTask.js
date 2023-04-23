import React, { useState } from "react";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

function AddTask(props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== "") {
      props.onAddItem(title);
      setTitle("");
    }
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (

    <Grid container spacing={2} alignItems="center" paddingBottom={3}>
      <Grid item xs={12} sm={6}>
        <form onSubmit={handleSubmit}>
          <Input type="text" value={title} onChange={handleChange} />
        </form>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Button type="submit" sx={{ fontSize: 'small', padding: '8px' }} onClick={handleSubmit}>Add Item</Button>
      </Grid>
    </Grid>

  );
}

export default AddTask;

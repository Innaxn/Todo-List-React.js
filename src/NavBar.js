import React from "react";
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TaskIcon from '@mui/icons-material/Task';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


const NavBar = () => {
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

                <List sx={{color: 'primary.main'}}>
                    <ListItem sx={{color: 'primary.main'}}>
                        <TaskIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
                        <Link to="/" style={{ textDecoration: 'none'}}>
                            Todo List
                        </Link>
                    </ListItem>
                    <ListItem sx={{color: 'primary.main'}}>
                        <AutoStoriesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
                        <Link to="/page" style={{ textDecoration: 'none', color: 'primary.main'}}>
                            Second Page
                        </Link>
                    </ListItem>
                </List>

            </Grid>
        </Grid>
    );
}

export default NavBar;

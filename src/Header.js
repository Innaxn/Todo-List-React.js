import { Toolbar, Typography } from '@mui/material';
import BallotIcon from '@mui/icons-material/Ballot';

function Header() {
  return (
    
      <Toolbar sx={{bgcolor: 'primary.main', color: 'white', position:'sticky'}}>
      <BallotIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography variant="h6" >
          My Todo List
        </Typography>
      </Toolbar>
  );
}

export default Header;
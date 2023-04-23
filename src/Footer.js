import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, bgcolor: 'primary.main', color: 'white', py: 2, position:'fixed', bottom:0, width:'100%'  }}  >
      <Container  >
        <Typography variant="body2" align="center">
          &copy; 2023 My Todo List. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
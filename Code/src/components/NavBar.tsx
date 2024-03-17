import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const NavBar: React.FC = () => {
  return (
    <AppBar position="absolute" variant='outlined' color='error'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ESG Analytics Platform
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/upload">Upload</Button>
        <Button color="inherit" component={Link} to="/analysis">Analysis</Button>
        <Button color="inherit" component={Link} to="/report-generation">Report Generation</Button>
        <Button color="inherit" component={Link} to="/settings">Settings</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
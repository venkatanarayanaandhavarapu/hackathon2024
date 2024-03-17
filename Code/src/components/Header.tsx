import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" color="error">
      <Toolbar>
        <Typography variant="h5" component="div">
          Wellsfargo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
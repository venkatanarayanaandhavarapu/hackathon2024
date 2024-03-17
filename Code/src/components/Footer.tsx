import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer: React.FC = () => {

  return (
    <AppBar position="fixed" color="error" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} Wellsfargo. All rights reserved.
      </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
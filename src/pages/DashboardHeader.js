import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';

export default function DashboardHeader({userName}) {
  return (
    <Box style={{display: 'flex', flexDirection: 'row'}}>
      <AppBar position="static" style={{backgroundColor: "#bb0000"}}>
        <Toolbar variant="dense" color="#354259" >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <FaceRoundedIcon fontSize='large'   style={{
                height: "35px",
                width: "35px"
              }} />
          </IconButton>
          <Typography variant="h4" color="inherit" component="div">
            Hi, {userName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
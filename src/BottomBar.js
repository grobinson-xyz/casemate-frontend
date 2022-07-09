import React, { useCallback, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import Box from '@mui/material/Box';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -10,
    left: 0,
    right: 0,
    margin: '0 auto',
   

  });

const BottomBar = () => {
    return (
     
         <AppBar position="fixed" style={{ background: '#ffffff' }} color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
          </IconButton>
          <StyledFab styles={{ color: '#FFFFFF', border:'1px' }}  aria-label="add">
            <SettingsVoiceIcon  />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
   
            );


}

export default BottomBar;
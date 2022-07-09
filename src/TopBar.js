import React, { useCallback, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CardMedia from '@mui/material/CardMedia';
import './TopBar.css'

const TopBar = () => {
    return (
        <div id='transcribe' className='transcript'  >
         <AppBar position="fixed" style={{ background: '#ffffff', textAlign:'center', alignItems:'center',boxShadow:'none' }} color="primary" sx={{ top: 0, bottom: 'auto' }}>
            <Toolbar >
            <CardMedia
                    component="img"
                    sx={{ width: 150}}
                    image="https://www.netitude.co.uk/hubfs/Imported_Blog_Media/microsoft-azure-1.png"
                    alt="Paella dish" />
              {/* <Typography className='heading' variant='subtitle' sx={{color:'royalblue'}}>CASEBUDDY</Typography> */}
            </Toolbar>
          </AppBar>
        </div>
            );


}

export default TopBar;
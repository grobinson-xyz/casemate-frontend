import { hooks } from 'botframework-webchat-component';
import React, { useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#053e85',
    },
    secondary: {
        main: '#edf2ff',
      },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const { useSendMessage } = hooks;

const ImBackButton = ({ cardAction: { title, value } }) => {
  const sendMessage = useSendMessage();
  const handleClick = useCallback(() => sendMessage(value), [value, sendMessage]);

  

  return (
    <>
    {title === 'Create New Case' &&
    <ThemeProvider theme={theme}>
    <IconButton  size="large" sx={{backgroundColor:'blue'}}  color="primary" type="button" onClick={handleClick}>
            <CreateNewFolderIcon />
          </IconButton>
          <br/>
          <Typography variant='caption' sx={{color:'blue'}}>{title}</Typography>
          </ThemeProvider>
}
{title === 'Closing Email' &&
    <ThemeProvider theme={theme}>
    <IconButton  size="large" sx={{backgroundColor:'blue'}}  color="primary" type="button" onClick={handleClick}>
            <MarkEmailReadIcon />
          </IconButton>
          <br/>
          <Typography variant='caption' sx={{color:'blue'}}>{title}</Typography>
          </ThemeProvider>
}
{title === 'Initial Response' &&
    <ThemeProvider theme={theme}>
    <IconButton  size="large" sx={{backgroundColor:'blue'}}  color="primary" type="button" onClick={handleClick}>
            <MarkEmailReadIcon />
          </IconButton>
          <br/>
          <Typography variant='caption' sx={{color:'blue'}}>{title}</Typography>
          </ThemeProvider>
}
{title === 'Networking' &&
    <ThemeProvider theme={theme}>
    <IconButton  size="large" sx={{backgroundColor:'blue'}}  color="primary" type="button" onClick={handleClick}>
            <MarkEmailReadIcon />
          </IconButton>
          <br/>
          <Typography variant='caption' sx={{color:'blue'}}>{title}</Typography>
          </ThemeProvider>
}
{title === 'Yes' &&
    <ThemeProvider theme={theme}>
    <IconButton  size="large" sx={{backgroundColor:'blue'}}  color="primary" type="button" onClick={handleClick}>
            <CheckCircleIcon />
          </IconButton>
          </ThemeProvider>
}
{title === 'No' &&
    <ThemeProvider theme={theme}>
    <IconButton  size="large" sx={{backgroundColor:'blue'}}  color="primary" type="button" onClick={handleClick}>
            <CancelIcon />
          </IconButton>
          </ThemeProvider>
}
    {/* <button
      // ImBack is essentially sending a message
      onClick={handleClick}
      type="button"
      className="cta-button connect-wallet-button"
      
    >
      
    </button> */}
    {/* <p>{title}</p> */}
    </>
  );
};

export default ImBackButton;
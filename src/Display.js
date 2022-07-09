import React, { useCallback, useState, useEffect } from 'react';
import { hooks } from 'botframework-webchat-component';
import './App.css';
import BlurLens from './BlurLens';
import BotResponse from './BotResponse';
import Attachment from './Attachment';
import SuggestedActions from './SuggestedActions';
import getValueOrUndefined from './util/getValueOrUndefined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { black, red } from '@mui/material/colors';
import useLastBotActivity from './hooks/useLastBotActivity';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

console.log(hooks);

const { useActivities, useSendMessage } = hooks;



const Display = () => {
  
  // const [lastBotActivity] = useLastBotActivity();
  const [lastReadActivityID, setLastReadActivityID] = useState();


  // const handleMicrophoneButtonClick = useCallback(() => {
  //   lastBotActivity && setLastReadActivityID(lastBotActivity.id);
  // }, [lastBotActivity, setLastReadActivityID]);


  //   const [activities] = useActivities();
  const sendMessage = useSendMessage();
  

  const [sendBoxValue, setSendBoxValue] = useState('');

  const handleChange = useCallback(({ target: { value } }) => setSendBoxValue(value), [setSendBoxValue]);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      sendMessage(sendBoxValue);
      setSendBoxValue('');
    },
    [sendBoxValue, sendMessage, setSendBoxValue]
  );
 
  const onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      sendMessage(sendBoxValue);
      setSendBoxValue('');
    }
  }


  return (
  <div>

    <TopBar/>
    <BotResponse lastReadActivityID={lastReadActivityID} />
    <BottomBar/>
    <br/>
    <form onSubmit={handleSubmit}>
        <TextField
          id="standard-textarea"
          label=""
          placeholder="Enter response"
          multiline
          onKeyDown={onEnterPress}
          style={{width:'100%',  bottom:'0'}}
          variant="outlined"
          value={sendBoxValue}
          onChange={handleChange}
        />
        </form>

  </div>
   
  );


}


/* <form onSubmit={handleSubmit}>
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          onKeyDown={onEnterPress}
          style={{width:'600px',  bottom:'0'}}
          variant="standard"
          value={sendBoxValue}
          onChange={handleChange}
        />
        </form> */



export default Display;
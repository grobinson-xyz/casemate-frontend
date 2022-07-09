import { Components } from 'botframework-webchat-component';
import * as React from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Display from './Display';


async function getDirectLineToken() {
  const res = await fetch('https://directline.botframework.com/v3/directline/conversations', { 
    method: 'POST',
    headers: {
      'Authorization': 'Bearer PDYQeaZ3jiU.K7Gt0LjFhTIgvE1aktfDrI05OQ90zNV1jSAh0GyCzUk'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
   });

  const { token } = await res.json();
  console.log(token)

  return token;
}



function App() {
  const [directLine, setDirectLine] = React.useState();


  if (!directLine) {
    // We will load DirectLineJS asynchronously on first render.
    getDirectLineToken().then(token => setDirectLine(createDirectLine({ token })));
  }

  return (
    <div className="App">
      
      <header className="App-header"> 
        
      {!!directLine && (
        <Components.Composer directLine={directLine}>
          <Display />
        </Components.Composer>
      )}
      </header>
      
      {/* <ReactWebChat className="chat" directLine={directLine} userID="20" /> */}
    </div>
  );
}

export default App;

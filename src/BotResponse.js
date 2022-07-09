import './BotResponse.css';
import { Components, createAdaptiveCardsAttachmentMiddleware } from 'botframework-webchat';
import Film from 'react-film';
import './App.css';
import React, { useCallback, useState, useMemo } from 'react';
import Attachment from './Attachment';
import SuggestedActions from './SuggestedActions';
import useLastBotActivity from './hooks/useLastBotActivity';
import TextField from '@mui/material/TextField';
import { hooks } from 'botframework-webchat-component';
const { useSendMessage } = hooks;

const BotResponse = ({ lastReadActivityID }) => {
   const [lastBotActivity] = useLastBotActivity();

   

  const renderAttachment = useMemo(() => {
    return createAdaptiveCardsAttachmentMiddleware()()(() => false);
  }, []);

  return (
    !!lastBotActivity &&
    lastBotActivity.id !== lastReadActivityID && (
      <div className="App-BotResponse">
        {!!lastBotActivity.text && 
        <div className="App-BotResponse-Activity">
          {lastBotActivity.text}
          </div>}
          
        <div className="App-BotResponse-Attachments" >
          {(lastBotActivity.attachments || []).map((attachment, index) => (
            <React.Fragment key={lastBotActivity.id || index}>
            <div className="App-BotResponse-Attachment" id="attach" key={index}>
              <Attachment {...attachment} />
            </div>
            </React.Fragment>
          ))}
        </div>
        
        <SuggestedActions />
       
      </div>
      
    )
  );
};

export default BotResponse;